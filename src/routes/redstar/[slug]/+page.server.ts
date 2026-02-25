import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { EntryGenerator } from './$types';

import { issues } from '$lib/red_star/issues';
import type { RedStarIssue } from '$lib/Types';

export const load: PageServerLoad = async ({ params }) => {
	const issue: RedStarIssue = issues[params.slug];

	if (issue) {
		return issue;
	}

	error(404, 'Not found');
};

export const entries: EntryGenerator = () => {
	const slugs = [];
	let i = 1;
	while (i <= issues.length) {
		slugs.push({ slug: `${i}` });
		i++;
	}
	return slugs;
};

export const prerender = true;
