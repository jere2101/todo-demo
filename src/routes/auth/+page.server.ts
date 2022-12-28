import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = getSupabase(event);
	if (!session) {
		throw redirect(307, '/');
	}
	return;
};
