// Global site data. Import from anywhere with `import { ... } from '../consts'`.

export const SITE_TITLE = 'Best Studio';
export const SITE_TAGLINE = '课业辅导与学术生涯规划工作室';
export const SITE_DESCRIPTION =
	'Best Studio 提供本硕博课业辅导、录播课程、考前冲刺，以及陪跑、咨询与 Predoc/PhD 申请规划服务，覆盖从课业提升到学术生涯决策的全周期支持。';
export const SITE_URL = 'https://www.beststudio-edu.com';

export const CONTACT_EMAIL = 'b.s.beststudio@gmail.com';
export const WECHAT_ACCOUNT = 'Best Studio留学工作室';
export const ZHIHU_URL = 'https://www.zhihu.com/people/xfyismi';
export const BILIBILI_URL = 'https://space.bilibili.com/802357';

// Full RA/科研助理求职、Predoc、PhD 申请规划 knowledge hub lives on the standalone
// predoc/PhD business site. Programs pages should link out to it rather than
// duplicating its depth here.
export const PREDOC_SITE_URL = 'https://best-studio-6yx.pages.dev/start-here/';

// TODO: paste a real Calendly scheduling link here once one exists.
// When set, the Book a Call page will render an embedded Calendly widget
// instead of the WeChat-only instructions.
export const CALENDLY_URL = '';

export const DIAGNOSTIC_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
	'背景诊断预约',
)}&body=${encodeURIComponent('年级/专业：\n目标方向（Predoc / PhD / 尚未确定）：\n当前困惑：\n')}`;

export const TUTORING_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
	'课程辅导咨询',
)}&body=${encodeURIComponent('年级/专业：\n意向服务（1v1 / 录播课 / 考前冲刺）：\n当前需求：\n')}`;

// Nav is grouped into two hard-separated tracks per the studio's identity-isolation
// policy: 张博条线 (real identity, tutoring) vs 匿名条线 (anonymous persona, programs).
// Never merge items from the two groups into a single list/component.
export const NAV_GROUPS = [
	{
		label: '课程辅导',
		href: '/courses',
		children: [
			{ href: '/courses/tutoring', label: '1v1课业辅导' },
			{ href: '/courses/recorded', label: '录播课程' },
			{ href: '/courses/exam-prep', label: '考前冲刺' },
			{ href: '/faculty', label: '师资力量' },
		],
	},
	{
		label: '陪跑与咨询',
		href: '/programs',
		children: [
			{ href: '/programs/mentorship', label: '陪跑' },
			{ href: '/programs/consulting', label: '咨询' },
			{ href: '/programs/predoc', label: 'Predoc / PhD 申请规划' },
		],
	},
] as const;

export const NAV_SIMPLE_LINKS = [
	{ href: '/cases', label: '案例' },
	{ href: '/resources', label: '知识库' },
	{ href: '/about', label: '关于我们' },
	{ href: '/contact', label: '联系我们' },
] as const;

// Flat list for the footer (order-preserving flatten of the groups above).
export const FOOTER_LINKS = [
	{ href: '/', label: '首页' },
	...NAV_GROUPS.flatMap((g) => g.children),
	...NAV_SIMPLE_LINKS,
] as const;
