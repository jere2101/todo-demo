<script lang="ts">
	import type { Todo } from '../../api/Todo';

	export let todos: Todo[];

	function getColor(todo: Todo) {
		if (todo.status === 'open') {
			return 'blue';
		}
		if (todo.status === 'finished') {
			return 'green';
		}

		if (todo.status === 'in_progress') {
			return 'yellow';
		}
	}
</script>

<div class="flex flex-direction:column  p:0|20px gap:10px overflow:auto">
	{#each todos as todo}
		<div class="w:100% border:solid|1px|grey r:5 p:10px|20px bc:grey  overflow:hidden">
			<h3 class="m:0">{todo.title}</h3>
		</div>
	{:else}
		<!-- No Todos with Filter -->
		<p>No Todos found with this searchValue</p>
	{/each}
</div>
