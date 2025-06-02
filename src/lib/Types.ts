export type SubNavItemType = {
	id: number;
	label: string;
	route: string;
};

export type NavItemType = {
	id: number;
	label: string;
	route: string;
	children: SubNavItemType[];
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
