// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Hakuun Blog'
export const SITE_DESCRIPTION = '记录 AI、编程与思考的个人博客'
export const AUTHOR_NAME = 'Hakuun'
export const AUTHOR_EMAIL = 'a888888hhb@outlook.com'
export const GITHUB_URL = 'https://github.com/hakuun'
export const REPOSITORY_URL = 'https://github.com/hakuun/blog'

// If you deploy to a subdirectory, set the `WEBSITE_BASE` here.
// e.g. '/blog' if you are deploying to example.com/blog
// Leave it as an empty string if you are deploying to a root domain (e.g. example.com)
export const SITE_BASE = '/blog'

export const SocialLinks = [
	{
		name: 'GitHub',
		url: GITHUB_URL,
	},
	{
		name: 'Email',
		url: `mailto:${AUTHOR_EMAIL}`,
	},
]

export const WebsiteLinks = [
	{
		name: 'Home',
		url: '',
	},
	{
		name: 'Blog',
		url: 'blog',
	},
	{
		name: 'PPT',
		url: 'ppt',
	},
	{
		name: 'About',
		url: 'about',
	},
]
