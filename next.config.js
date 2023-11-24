/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org"], // 여기에 이미지 호스트를 추가
	},
};

module.exports = nextConfig;
