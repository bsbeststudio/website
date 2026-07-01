// Global site data. Import from anywhere with `import { ... } from '../consts'`.

export const SITE_TITLE = 'Best Studio';
export const SITE_TAGLINE = '学术早期职业规划与申请辅导';
export const SITE_DESCRIPTION =
	'Best Studio 为研究导向的学生提供 Predoc、PhD 申请与学术职业规划的一对一咨询，基于真实招募逻辑与决策框架，帮助你做出经得起验证的选择。';
export const SITE_URL = 'https://www.beststudio-edu.com';

export const CONTACT_EMAIL = 'b.s.beststudio@gmail.com';
export const WECHAT_ACCOUNT = 'Best Studio留学工作室';

// TODO: paste a real Calendly scheduling link here once one exists.
// When set, the Book a Call page will render an embedded Calendly widget
// instead of the WeChat-only instructions.
export const CALENDLY_URL = '';

export const NAV_LINKS = [
	{ href: '/', label: '首页' },
	{ href: '/about', label: '关于我们' },
	{ href: '/services', label: '服务' },
	{ href: '/case-studies', label: '案例' },
	{ href: '/faq', label: '常见问题' },
	{ href: '/contact', label: '联系' },
] as const;
