import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    '@weekend-studio/easyblog-components', 
    '@weekend-studio/easyblog-next',
    'lowlight'],
  webpack: (config: any) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    }
    return config
  }
}

export default nextConfig;
