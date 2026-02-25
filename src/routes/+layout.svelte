<script lang="ts">
	import { resolve } from '$app/paths';

	import '../app.css';
	let { children } = $props();

	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';

	const navItems = [
		{
			id: 1,
			label: 'About',
			route: '/'
		},
		{
			id: 2,
			label: 'Bylaws',
			route: resolve('/bylaws'),
			children: [
				{ id: 1, label: 'Communications', route: resolve('/bylaws/communications') },
				{ id: 2, label: 'Membership', route: resolve('/bylaws/membership') },
				{ id: 3, label: 'Mutual Aid', route: resolve('/bylaws/mutual-aid') },
				{ id: 4, label: 'Political Education', route: resolve('/bylaws/political-education') }
			]
		},
		{
			id: 3,
			label: 'Calendar',
			route: resolve('/calendar')
		},
		{
			id: 4,
			label: 'Join',
			route: resolve('/join')
		},
		{
			id: 5,
			label: 'Red Star Advertiser',
			route: resolve('/redstar'),
			children: [
				{ id: 1, label: 'Past Issues', route: resolve('/redstar/past') },
				{ id: 2, label: 'Union Plaza', route: resolve('/redstar/news/the-real-deal-about-union-plaza') }
			]
		}
	];

	const socials = [
		{
			id: 1,
			class: 'bi-github',
			label: 'github-link',
			href: 'https://github.com/Democratic-Socialists-of-Oahu',
			img: '',
			alt: 'DSO GitHub link'
		},
		{
			id: 2,
			class: 'bi-instagram',
			label: 'instagram-link',
			href: 'https://www.instagram.com/ds.of.oahu/',
			img: '',
			alt: 'DSO Instagram link'
		}
	];
</script>

<NavBar {navItems} {socials} />

<main
	class="
	font-StyreneB
	my-4
	grid
    max-w-xl
    justify-self-center
    text-center
    text-2xl
	md:max-w-3xl
	lg:max-w-5xl
	xl:max-w-6xl
"
>
	{@render children()}
</main>

<Footer />
