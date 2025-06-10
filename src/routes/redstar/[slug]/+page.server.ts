import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { issues } from '$lib/red_star/issues';

export const load: PageServerLoad = async ({ params }) => {
	const issue = issues[issues.length - params.slug];

	if (issue) {
		return issue;
	}

	error(404, 'Not found');
};
