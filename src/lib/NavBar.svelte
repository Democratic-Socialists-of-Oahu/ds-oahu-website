<script lang="ts">
	import NavBarDropDown from '$lib/NavBarDropDown.svelte';

	import { page } from '$app/state';

	import type { NavItemType, SocialType } from '$lib/Types';
	export let navItems: NavItemType[];
	export let socials: SocialType[];
</script>

<div class="justify-items-center">
	<header class="mb-4 mt-12 justify-items-center">
		<a href="/">
			<img class="mb-3" src="/images/photo.jpg" alt="DSO Logo" width="120" height="120" />
		</a>
		<h1 class="font-StyreneB text-center text-4xl font-bold">Democratic Socialists of O'ahu</h1>
	</header>

	<nav class="flex justify-between bg-[#872D23] p-4 max-w-6xl w-full" id="navbar">
		<div class="flex" id="navbar-nav">
			{#each navItems as navItem}
				<a
					class="
					nav-item
					nav-link
					mr-4
					{page.url.pathname === navItem.route ? 'font-bold opacity-100' : 'font-semibold opacity-50'}
					text-white
					hover:opacity-80
					"
					href={navItem.route}
					class:font-bold={page.url.pathname === navItem.route}
					>{navItem.label}</a
				>
				{#each navItem.children as child}
					<NavBarDropDown />
				{/each}
			{/each}
		</div>

		<div class="flex" id="social-buttons">
			{#each socials as social}
				<a
					class="bi {social.class} ml-2 text-xl text-white opacity-50 hover:opacity-100"
					href={social.href}
					target="_blank"
					aria-label={social.label}
				></a>
			{/each}
		</div>
	</nav>
</div>
