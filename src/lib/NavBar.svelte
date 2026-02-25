<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';

	import NavBarDropDown from '$lib/NavBarDropDown.svelte';

	import type { NavItemType, SocialType } from '$lib/Types';
	export let navItems: NavItemType[];
	export let socials: SocialType[];
</script>

<!-- TODO: fix element ids -->

<div class="justify-items-center justify-self-center w-full max-w-6xl">
	<header class="mb-4 mt-12 justify-items-center">
		<a href="/">
			<img class="mb-3" src="/images/dso_logo_128.png" alt="DSO Logo" width="120" height="120" />
		</a>
		<h1 class="font-StyreneB text-center text-4xl font-bold">Democratic Socialists of O'ahu</h1>
	</header>

	<nav class="flex w-full max-w-6xl justify-between bg-[#872D23] p-4" id="navbar">
		<div class="flex" id="navbar-nav">
			{#each navItems as navItem}
				{#if navItem.children}
					<NavBarDropDown let:hovering={active}>
						<a
							href={navItem.route}
							class="
								nav-item
								nav-link
								mr-4
								{page.url.pathname.includes(navItem.route) ? 'font-bold opacity-100' : 'font-semibold opacity-50'}
								text-white
								hover:opacity-80
							"
							id="menu-button"
							aria-expanded="true"
							aria-haspopup="true"
						>
							{navItem.label}
						</a>

						<!--
						Dropdown menu, show/hide based on menu state.
					
						Entering: "transition ease-out duration-100"
							From: "transform opacity-0 scale-95"
							To: "transform opacity-100 scale-100"
						Leaving: "transition ease-in duration-75"
							From: "transform opacity-100 scale-100"
							To: "transform opacity-0 scale-95"
						-->
						{#if navItem.children}
							{#if active}
								<div
									transition:slide|global
									class="
										absolute
										z-10
										m-0
										flex
										flex-col
										justify-center
										divide-y
										divide-red-500
										rounded-md
										bg-red-800
										bg-opacity-80
										shadow-lg
										ring-1
										ring-black
										ring-opacity-5
										focus:outline-none
									"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="menu-button"
									tabindex="-1"
								>
									{#each navItem.children as child}
										<a
											href={child.route}
											class="
												m-0
												px-4
												py-2
												text-sm
												font-medium
												text-white
												hover:bg-red-500
											"
											role="menuitem"
											tabindex="-1"
											id="menu-item-0"
										>
											{child.label}
										</a>
									{/each}
								</div>
							{/if}
						{/if}
					</NavBarDropDown>
				{:else}
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
						class:font-bold={page.url.pathname === navItem.route}>{navItem.label}</a
					>
				{/if}
			{/each}
		</div>

		<div class="flex" id="social-buttons">
			<a
				id="dues-link"
				class="
					nav-item
					nav-link
					text-white
					{page.url.pathname.includes('/endorsement') ? 'font-bold opacity-100' : 'font-semibold opacity-50'}
					hover:opacity-100
					mr-4
					"
				href="/endorsement"
				aria-label="endorse-link"
			>Get Endorsed</a>
			<a
				id="dues-link"
				class="
					nav-item
					nav-link
					text-white
					font-semibold
					opacity-50
					hover:opacity-100
					mr-4
					"
				href="https://www.zeffy.com/en-US/donation-form/dso-dues"
				target="_blank"
				aria-label="dues-link"
			>Pay your dues!</a>
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
