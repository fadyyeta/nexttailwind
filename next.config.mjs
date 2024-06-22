/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["picsum.photos", "pixabay.com"],
	},
	env: {
		BASE_URL: process.env.BASE_URL,
		PIXABAY_API_KEY: process.env.PIXABAY_API_KEY,
	},
};

export default nextConfig;
