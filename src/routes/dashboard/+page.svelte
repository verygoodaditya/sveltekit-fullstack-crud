<script>
	import { db } from '../../lib/firebase/firebase';
	import { authHandlers, authStore } from '../../store/store';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import TodoItem from '../../components/TodoItem.svelte';

	let todoList = [];
	let currTodo = '';
	let error = false;

	authStore.subscribe((curr) => {
		todoList = curr.data.todos;
	});

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			addTodo();
		}
	}

	function addTodo() {
		error = false;
		if (!currTodo) {
			error = true;
		}
		todoList = [...todoList, currTodo];
		currTodo = '';
	}

	function editTodo(index) {
		let newTodoList = [...todoList].filter((val, i) => {
			console.log(i, index, i !== index);
			return i != index;
		});
		currTodo = todoList[index];
		todoList = newTodoList;
	}

	function removeTodo(index) {
		let newTodoList = [...todoList].filter((val, i) => {
			console.log(i, index, i !== index);
			return i != index;
		});
		todoList = newTodoList;
	}

	async function saveTodos() {
		try {
			const userRef = doc(db, 'users', $authStore.user.uid);
			await setDoc(
				userRef,
				{
					todos: todoList
				},
				{ merge: true }
			);
		} catch (err) {
			console.log('There was an error saving your information');
		}
	}
</script>

{#if !$authStore.loading}
	<div class="mainContainer">
		<div class="headerContainer">
			<h1>Todo List</h1>
			<div class="headerBtns">
				<button on:click={saveTodos}>
					<i class="fa-regular fa-floppy-disk" />
					<p>Save</p></button
				>
				<button on:click={authHandlers.logout}>
					<i class="fa-solid fa-right-from-bracket" />
					<p>Logout</p></button
				>
			</div>
		</div>
		<main>
			{#if todoList.length === 0}
				<p>You have nothing to do!</p>
			{/if}
			{#each todoList as todo, index}
				<TodoItem {todo} {index} {removeTodo} {editTodo} />
			{/each}
		</main>
		<div class={'enterTodo ' + (error ? 'errorBorder' : '')}>
			<input
				bind:value={currTodo}
				type="text"
				placeholder="Enter todo"
				on:keydown={handleKeyPress}
			/>
			<button on:click={addTodo}>ADD</button>
		</div>
	</div>
{/if}

<style>
	.mainContainer {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		gap: 24px;
		padding: 24px;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	.headerContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.headerBtns {
		display: flex;
		align-items: center;
		gap: 13px;
	}

	.headerContainer button {
		padding: 10px 18px;
		background: rgb(145, 164, 167);
		border: none;
		color: rgb(56, 55, 55);
		font-weight: 600;
		cursor: pointer;
		transition:
			background 0.2s ease-in-out,
			color 0.2s ease-in-out;
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.headerContainer button:hover {
		background: rgb(0, 129, 169);
		color: rgb(215, 215, 215);
	}

	.headerContainer button i {
		font-size: 1.1rem;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 1;
	}

	.todo {
		border-left: 1px solid cyan;
		padding: 8px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 14px;
		font-size: 1.3rem;
	}

	/* .actions #poop,
	#poop2 {
		transition: opacity 0.2s ease-in-out;
		opacity: 0.4;
	}

	.actions #poop:hover {
		opacity: 1;
	}

	.actions #poop2:hover {
		opacity: 1;
	} */

	.enterTodo {
		display: flex;
		align-items: stretch;
		border: 1.3px solid rgb(197, 211, 211);
		border-radius: 6px;
		overflow: hidden;
	}

	.errorBorder {
		border-color: rgb(255, 136, 136) !important;
	}

	.enterTodo input {
		background: transparent;
		border: none;
		padding: 14px;
		color: white;
		flex: 1;
	}

	.enterTodo input:focus {
		outline: none;
	}

	.enterTodo button {
		padding: 0 39px;
		background: rgb(145, 164, 167);
		border: none;
		color: rgb(56, 55, 55);
		font-weight: 600;
		cursor: pointer;
		transition:
			background 0.2s ease-in-out,
			color 0.2s ease-in-out;
		border-radius: 4px;
	}

	.enterTodo button:hover {
		background: rgb(0, 129, 169);
		color: rgb(215, 215, 215);
	}
</style>
