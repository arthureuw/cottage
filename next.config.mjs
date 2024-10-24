import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['8qtkaexgrtfjkrit.public.blob.vercel-storage.com'],
  },
};

export default withNextIntl(nextConfig);