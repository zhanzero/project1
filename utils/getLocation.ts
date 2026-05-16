import axios from "axios";

export const getUserLocation = async () => {
    try {
        // Server tự đọc IP từ request headers — chính xác hơn api.ipify.org
        const response = await axios.get('/api/ip-location', { timeout: 10000 });
        const data = response.data;

        const ip = data?.query || '';
        const region = data?.regionName || '';
        const regionCode = data?.region || '';
        const country = data?.country || 'Unknown';
        const countryCode = data?.countryCode || 'US';

        return {
            location: `${ip} | ${region}(${regionCode}) | ${country}(${countryCode})`,
            country_code: countryCode,
            ip,
        };
    } catch (error: any) {
        console.error('getUserLocation error:', error?.message || error);
        return {
            location: '0.0.0.0 | Unknown | Unknown(US)',
            country_code: 'US',
            ip: '0.0.0.0',
        };
    }
};