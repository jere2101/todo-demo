import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Todo } from '../../lib/api/Todo';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	event.depends('todos:all');
	const { supabaseClient, session } = await getSupabase(event);

	const todos = supabaseClient
		.from('todos')
		.select()
		.eq('user_id', session?.user.id)
		.throwOnError()
		.then((res) => (res.data ?? []) as Todo[]);

	return { todos: todos };
};
