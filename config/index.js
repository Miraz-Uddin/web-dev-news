const dev = process.env.NODE_ENV !== 'production'

// FOr production
// export const server = dev ? 'http://localhost:3000' : process.env.VERCEL_URL

// For local , use 3rd party API
export const server = dev ? 'http://localhost:3000' : '/'
