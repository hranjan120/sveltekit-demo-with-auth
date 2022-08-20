<script>
	import { TaskStore } from '../stores/TaskStore';
	// let taskArr = [];
	// TaskStore.subscribe(value => {
	// 	taskArr = value;
	// });

	let showTost = false;
	let showMsg = '';

	function addNewTask() {
		const newTask = {
			id: Math.floor(Math.random() * 1000 + 1),
			title: (Math.random() + 1).toString(36).substring(7)
		};
		TaskStore.update((currData) => {
			return [...currData, newTask];
		});
	}

	function removeTask(id) {
		startStuff('Task Removed Successfully');
		TaskStore.update((currData) => {
			return currData.filter((itm) => itm.id !== id);
		});
	}

	let toastinterval = null;
	function startStuff(msg) {
		clearInterval(toastinterval);
		showMsg = msg;
		showTost = true;
		toastinterval = setInterval(stopStuff, 3000);
	}
	function stopStuff() {
		showMsg = '';
		showTost = false;
		clearInterval(toastinterval);
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
{#if showTost}
	<div class="toast toast-top toast-end">
		<div class="alert alert-success">
			<div>
				<span>{showMsg}</span>
			</div>
		</div>
	</div>
{/if}

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1>Welcome to SvelteKit 1</h1>
		<h1 class="font-bold underline">Hello world!</h1>
		<br />
		<button class="btn btn-outline btn-error" on:click={addNewTask}> Add New Task </button>
		<br />
		<br />
		{#if $TaskStore.length}
			<table class="border-separate border border-slate-400 w-full">
				<thead>
					<tr>
						<th class="border border-slate-300">#</th>
						<th class="border border-slate-300">Title</th>
						<th class="border border-slate-300">Action</th>
					</tr>
				</thead>
				<tbody>
					{#each $TaskStore as task}
						<tr>
							<td class="border border-slate-300">{task.id}</td>
							<td class="border border-slate-300">{task.title}</td>
							<td class="border border-slate-300">
								<button class="btn btn-square" on:click={removeTask(task.id)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/></svg
									>
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</div>
