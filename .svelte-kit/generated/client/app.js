export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/hasil-wawancara": [4],
		"/perpustakaan/apa-itu-bullying": [5,[2]],
		"/perpustakaan/apa-penyebab-bullying": [6,[2]],
		"/perpustakaan/cara-mengendalikan-pembullyian": [7,[2]],
		"/perpustakaan/dampak-bullying-bagi-korban": [8,[2]],
		"/perpustakaan/statistika-bullying": [9,[2]],
		"/tentang-kami": [10],
		"/tokoh-wawancara": [11]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';