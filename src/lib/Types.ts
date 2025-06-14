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
	editorial?: Editorial;
	events?: RedStarEvent[];
};
