import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { error } from '@sveltejs/kit';
import type { RawTodo } from '../../lib/api/Todo';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const { supabaseClient, session } = await getSupabase(event);

		if (!session) {
			throw 'Session ist undefined';
		}

		const { request } = event;

		const formData = await request.formData();
		const title = formData.get('title')?.toString() satisfies string | undefined;
		const description = formData.get('description')?.toString() satisfies string | undefined;
		const due_at = formData.get('due_at')?.toString() satisfies string | undefined;

		if (!title) {
			throw error(400, { message: 'Todo needs an title' });
		}

		const todo: RawTodo = {
			title,
			description,
			due_at: due_at ? new Date(due_at) : undefined,
			user_id: session?.user.id,
			status: 'open'
		};
		await supabaseClient.from('todos').insert(todo).throwOnError();

		return;
	}
};
