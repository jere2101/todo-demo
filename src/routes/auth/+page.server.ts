import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { session } = await getSupabase(event);

	if (session) {
		console.log('redirect', '/');
		console.log('----------------------');
		throw redirect(307, '/');
	}

	return;
};
