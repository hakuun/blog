// PPT 演示栏目数据
// 每套演示:把一个自包含 HTML 放到 public/ppt/<slug>/ 下,然后在此登记一条记录。
export type Ppt = {
	slug: string
	title: string
	description: string
	date: Date
}

export const ppts: Ppt[] = [
	{
		slug: 'from-url-to-page',
		title: '从输入网址到网页显示',
		description:
			'一次分享:输入一个网址,按下回车,到页面出现在屏幕上——中间经历了什么?DNS、TCP、TLS、HTTP、缓存……层层拆解。',
		date: new Date('2026-08-21'),
	},
]
