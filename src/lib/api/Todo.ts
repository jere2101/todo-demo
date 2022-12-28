export interface Todo extends RawTodo {
	id: string;
	created_at: Date;
}

export interface RawTodo {
	user_id: string;
	title: string;
	description?: string;

	due_at?: Date;
	status: 'in_progress' | 'open' | 'finished';
}
