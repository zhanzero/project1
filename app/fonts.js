import localFont from 'next/font/local'

export const optimisticFontVF = localFont({
    src: '../public/fonts/-pkMfchyeAZ.woff2',
    display: 'swap',
    format: "woff2-variations",
    variable: "--font-optimistic-vf",
    preload: true,
    style: 'normal',
    weight: '200 800',
})