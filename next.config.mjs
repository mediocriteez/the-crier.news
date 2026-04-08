import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,

};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// export default nextConfig;

export default withMDX(nextConfig)

