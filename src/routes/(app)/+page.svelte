<script lang="ts">
	import Modal from '../../lib/components/Modal.svelte';
	import NewTodo from '../../lib/components/Todo/NewTodo.svelte';

	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import TodoList from '../../lib/components/Todo/TodoList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let newTodoModal: Modal;
	let searchValue: string;

	$: filteredTodos = searchValue
		? data.todos.filter((todo) => {
				return todo.title.includes(searchValue);
		  })
		: data.todos;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Todos -->
<!-- Todo List nav -->
<div class="flex w:100% p:0|20px m:20px|0">
	<div class="width:50% min-widht:400px">
		<input
			class="width:100% h:45px p:10px|8px border:solid|1px|rgba(0,0,0,0.1) bg:white color:black outline:none f:20 r:5"
			type="email"
			placeholder="Search Todos"
			bind:value={searchValue}
		/>
	</div>
	<button
		class=" b:none ml:auto p:0|20px r:5px bg:var(--primary) f:20 h:45px"
		on:click={() => {
			newTodoModal.open();
		}}
		>New Todo
	</button>
</div>

<!-- Todo List Container -->
{#if data.todos?.length > 0}
	<TodoList todos={filteredTodos} />
{:else}
	<!-- TODOs welcome Message TODO: auslagern in welcome Fenster -->
	<div class="p:20">
		<h1 class="f:40 mb:5 m:0">Welcome to Todo App</h1>
		<p class="f:20">Let's create your First Todo</p>
		<form
			method="post"
			class="flex flex-direction:column gap:15px"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						invalidate('todos:all');
					}
					await applyAction(result);
				};
			}}
		>
			<NewTodo />
		</form>
	</div>
{/if}

<!-- New TODO Modal
 -->
<Modal bind:this={newTodoModal}>
	<div class="flex align-items:center m:0|0|10px|0 f:40 ">
		<button
			class="bg:none border:none outline:none bg:whitesmoke:hover r:100 flex align-items:center justify-content:center"
			on:click={() => {
				newTodoModal.close();
			}}
		>
			<span class="material-symbols-outlined"> arrow_back_ios </span></button
		>
		<h1 class="f:40 m:0|0|0|20px">New Todo</h1>
	</div>
	<form
		method="post"
		class="flex flex-direction:column gap:15px"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.type === 'success') {
					invalidate('todos:all');
					newTodoModal.close();
				}
				await applyAction(result);
			};
		}}
	>
		<NewTodo />
	</form>
</Modal>
