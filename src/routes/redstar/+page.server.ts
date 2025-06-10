import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

import { issues } from '$lib/red_star/issues';

export const load: LayoutServerLoad = ({ locals }) => {
	if (!locals.user) {
		redirect(307, '/redstar/' + issues.length);
	}
};