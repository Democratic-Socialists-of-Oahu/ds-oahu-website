export type SubNavItemType = {
	id: number;
	label: string;
	route: string;
};

export type NavItemType = {
	id: number;
	label: string;
	route: string;
	children?: SubNavItemType[];
};

export type SocialType = {
	id: number;
	class: string;
	label: string;
	href: string;
	alt: string;
};

export type NewsItemType = {
	title?: string;
	image?: string;
	href: string;
	content: string;
	commentary?: string;
	source: string;
};

export type Quote = {
	text: string;
	source: string;
};

export type Editorial = {
	paragraphs: string[];
	author?: string;
	title?: string;
	subtitle?: string;
};

export type RedStarEvent = {
	when: string[];
	title: string[];
};

export type RedStarIssue = {
	number: number;
	date: Date;
	newsItems?: NewsItemType[];
	quote?: Quote;
	editorial?: Editorial;
	events?: RedStarEvent[];
};

export type RedStarArticle = {
	id: number;
	slug: string;
	date: Date;
	title?: string;
	subtitle?: string;
	author?: string;
	content: string;
};
