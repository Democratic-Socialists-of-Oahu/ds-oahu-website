<script lang="ts">
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
			route: '/bylaws'
		},
		{
			id: 3,
			label: 'Calendar',
			route: '/calendar'
		},
		{
			id: 4,
			label: 'Join',
			route: '/join'
		},
		{
			id: 5,
			label: 'Red Star Advertiser',
			route: '/redstar',
			children: [{ id: 1, label: 'Past Issues', route: '/redstar/past' }]
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

<main class="
	font-StyreneB
	grid
	m-4
    max-w-xl
    md:max-w-3xl
    lg:max-w-5xl
    xl:max-w-6xl
	justify-self-center
	text-center
	text-2xl
">
	{@render children()}
</main>

<Footer />
