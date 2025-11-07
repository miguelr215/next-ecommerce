import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.boundtree.com",
				port: "",
				pathname: "/medias/**",
			},
		],
	},
};

export default nextConfig;
