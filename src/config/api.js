export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production'
    ? "https://your-backend-url.vercel.app" // Placeholder - User will override this with Env Var
    : "http://localhost:9002");
