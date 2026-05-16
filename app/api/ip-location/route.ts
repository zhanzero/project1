import { NextRequest, NextResponse } from "next/server";

function getClientIp(req: NextRequest): string | null {
    // Cloudflare
    const cf = req.headers.get('cf-connecting-ip');
    if (cf) return cf.trim();

    // Vercel / nginx / load balancer
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();

    // Direct
    const realIp = req.headers.get('x-real-ip');
    if (realIp) return realIp.trim();

    // Fallback: query param (dùng khi test local)
    const param = new URL(req.url).searchParams.get('ip');
    return param || null;
}

export async function GET(req: NextRequest) {
    const ip = getClientIp(req);

    if (!ip) {
        return NextResponse.json(
            { error: "Cannot determine IP address" },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,query`
        );
        const data = await response.json();

        if (data.status === 'fail') {
            return NextResponse.json(
                { error: data.message || 'IP lookup failed' },
                { status: 400 }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch IP data" },
            { status: 500 }
        );
    }
}