export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production'
    ? "https://web-doc-vert.vercel.app"
    : "http://localhost:9002");
