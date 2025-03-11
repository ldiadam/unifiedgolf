export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://localhost:3001/be-golf";

export const fetchConfig = {
  // Only use this in development!
  ...(process.env.NODE_ENV === "development" && {
    next: {
      revalidate: 0,
      cache: "no-store",
    },
    // Allow self-signed certificates in development
    agent: new (require("https").Agent)({
      rejectUnauthorized: false,
    }),
  }),
};
