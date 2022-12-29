import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { User } from '../lib/api/User';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	if (!session) {
		if (!event.url.pathname.startsWith('/auth')) throw redirect(307, '/auth');
		return;
	}

	const { data, error } = await supabaseClient
		.from('users')
		.select()
		.eq('id', session?.user.id)
		.maybeSingle();

	if (error) throw error;

	if (!data) {
		if (!event.url.pathname.startsWith('/new-user')) throw redirect(307, '/new-user');
		return;
	}

	return { session: session, user: data as User | null };
};
