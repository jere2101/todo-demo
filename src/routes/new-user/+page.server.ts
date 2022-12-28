import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { supabaseClient, session } = await getSupabase(event);

	if (!session) {
		throw redirect(307, '/');
	}

	const { count } = await supabaseClient.from('users').select().eq('id', session?.user.id).single();

	if (count === 0) {
		return;
	}
	throw redirect(307, '/');
};

export const actions: Actions = {
	default: async (event) => {
		const { session, supabaseClient } = await getSupabase(event);

		const formData = await event.request.formData();

		const username = formData.get('username');
		const name = formData.get('name');

		if (!session) {
			throw new Error('Session is undefined');
		}

		try {
			const { error } = await supabaseClient
				.from('users')
				.insert({ id: session?.user.id, name, username });

			if (error) {
				throw error;
			}
		} catch (err) {
			console.error('Error creating new User', err);
		}

		return;
	}
};
