/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		domains: ['cdn.sanity.io']
	},
	i18n: {
		locales: ['en','tr'],
		defaultLocale: 'en'
	}
}

module.exports = nextConfig
