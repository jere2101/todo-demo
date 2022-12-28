import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { User } from '../lib/api/User';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	if (!event.url.pathname.startsWith('/auth') && !session) {
		throw redirect(307, '/auth');
	}

	const { data, error } = await supabaseClient
		.from('users')
		.select()
		.eq('id', session?.user.id)
		.maybeSingle();

	if (error) throw error;

	if (!event.url.pathname.startsWith('/new-user') && !data) {
		throw redirect(307, '/new-user');
	}

	return { session: session, user: data as User | null };
};
