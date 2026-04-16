/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      'https://frotzpxjpyflkaswynvf.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyb3R6cHhqcHlmbGthc3d5bnZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMDc4ODAsImV4cCI6MjA5MDY4Mzg4MH0.5DdM7U127tOkLOq4GlNbjbpKjCvo79Zbp9LQH4US3M8',
  },
}

module.exports = nextConfig
