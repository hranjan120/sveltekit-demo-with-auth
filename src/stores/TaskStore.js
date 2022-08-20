import { writable } from 'svelte/store';

const taskArr = [
	{
		id: 1,
		title: 'qwerty uiop'
	}
];

export const TaskStore = writable(taskArr);
