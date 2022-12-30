export const API = {
	topPage: {
		find: process.env.NEX_PUBLIC_DOMAIN + '/api/top-page/find',
		byAlias: process.env.NEX_PUBLIC_DOMAIN + '/api/top-page/byAlias/'
	},

	product: {
		find: process.env.NEX_PUBLIC_DOMAIN + '/api/product/find'
	},

	review: {
		createDemo: process.env.NEX_PUBLIC_DOMAIN + '/api/review/create-demo'
	}
};