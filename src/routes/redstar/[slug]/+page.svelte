<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	import Card from '$lib/Card.svelte';
	import NavBarDropDown from '$lib/NavBarDropDown.svelte';

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let { data }: PageProps = $props();
	let editorialCopied: boolean = $state(false);
	let eventsCopied: boolean = $state(false);

	function editorialHandler() {
		editorialCopied = false;
	}

	function eventsHandler() {
		eventsCopied = false;
	}
</script>

<div class="mb-4 flex w-full content-center justify-center justify-self-center bg-[#f9f3c6] py-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="red"
		viewBox="0 0 260 245"
		class="mr-1 h-14 md:mr-2 md:h-16"
	>
		<path d="m56,237 74-228 74,228L10,96h240" />
	</svg>
	<div>
		<div class="font-serif text-3xl italic md:text-4xl">The Red Star Advertiser</div>
		<div class="text-right text-base md:text-lg">
			Issue {data.number}, {months[data.date.getMonth()]}
			{data.date.getDate()}, {data.date.getFullYear()}
		</div>
	</div>
</div>

{#if data.newsItems}
	<div id="news" class="text-left indent-12">In the News...</div>

	<div
		class="
        grid
        grid-cols-1
        items-start
        justify-items-center

        md:grid-cols-2

        lg:grid-cols-3
    "
	>
		{#each data.newsItems as newsItem}
			<Card {newsItem} />
		{/each}
	</div>
{/if}

{#if data.editorial}
	<div
		id="editorial"
		class="relative my-4 w-full max-w-[75%] justify-self-center bg-[#872D23] py-2 font-bold text-white"
	>
		<NavBarDropDown let:hovering={active}>
			<button
				onclick={function () {
					const linkText = page.url.href + '#' + this.parentElement.parentElement.id;
					navigator.clipboard.writeText(linkText);
					editorialCopied = true;
				}}
				class="absolute left-0 ml-8 cursor-pointer text-white opacity-20 transition duration-200 ease-in-out hover:opacity-80"
				>#</button
			>
			{#if active}
				<div transition:fade={{ duration: 100 }} onoutroend={editorialHandler} class="shadow-lg">
					<div class="absolute bottom-14 rounded-md bg-red-700 p-2 text-sm">
						{#if editorialCopied}Copied!{:else}Copy link to Clipboard{/if}
					</div>
					<div
						class="absolute bottom-10 left-7 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-red-700"
					></div>
				</div>
			{/if}
		</NavBarDropDown>
		This Week’s Editorial
	</div>

	{#if data.editorial.title}
		<div>
			<div class="font-bold">{data.editorial.title}</div>

			{#if data.editorial.subtitle}
				<div class="text-[18px] italic">{data.editorial.subtitle}</div>
			{/if}
		</div>
	{/if}

	<div class="mb-8 w-full max-w-[100%] md:max-w-[75%] justify-self-center">
		{#each data.editorial.paragraphs as paragraph}
			<div class="my-4 px-6 text-left indent-8 text-base">
				{paragraph}
			</div>
		{/each}

		<div class="my-4 pl-12 text-right text-base">- {data.editorial.author}</div>
	</div>
{/if}

{#if data.events}
	<div
		id="events"
		class="relative mt-4 w-full max-w-[75%] justify-self-center bg-[#872D23] py-2 font-bold text-white"
	>
		<NavBarDropDown let:hovering={active}>
			<button
				onclick={function () {
					const linkText = page.url.href + '#' + this.parentElement.parentElement.id;
					navigator.clipboard.writeText(linkText);
					eventsCopied = true;
				}}
				class="absolute left-0 ml-8 cursor-pointer text-white opacity-20 transition duration-200 ease-in-out hover:opacity-80"
				>#</button
			>
			{#if active}
				<div transition:fade={{ duration: 100 }} onoutroend={eventsHandler} class="shadow-lg">
					<div class="absolute bottom-14 rounded-md bg-red-700 p-2 text-sm">
						{#if eventsCopied}Copied!{:else}Copy link to Clipboard{/if}
					</div>
					<div
						class="absolute bottom-10 left-7 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-red-700"
					></div>
				</div>
			{/if}
		</NavBarDropDown>
		Upcoming Events
	</div>

	<table class="border-collapse border-spacing-4 justify-self-center text-base">
		<tbody>
			{#each data.events as event}
				<tr>
					<td class="justify-self-end border-y py-4 pr-4 text-right">
						{#each event.when as line}
							<div>{line}</div>
						{/each}
					</td>
					<td class="justify-self-start border-y py-4 pl-4 text-left">
						{#each event.title as line}
							<div>{line}</div>
						{/each}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<div class="flex w-full content-center justify-center justify-self-center bg-[#f9f3c6] py-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="red"
		viewBox="0 0 260 245"
		class="mr-1 h-14 md:mr-2 md:h-16"
	>
		<path d="m56,237 74-228 74,228L10,96h240" />
	</svg>
	<div>
		<div class="font-serif text-3xl italic md:text-4xl">The Red Star Advertiser</div>
		<div class="text-right text-base md:text-lg">
			Issue {data.number}, {months[data.date.getMonth()]}
			{data.date.getDate()}, {data.date.getFullYear()}
		</div>
	</div>
</div>
<div class="w-full max-w-[75%] text-right text-sm">
	a Democratic Socialists of O‘ahu publication
</div>

<a
	href="https://docs.google.com/forms/d/e/1FAIpQLSdoKrcmKykCo3PBA3Ya95dypEVdjZlIKwOkb91UbrTxgDelfQ/viewform"
	target="_blank"
	class="my-4 flex items-center justify-self-center italic hover:opacity-65"
>
	<div class="">Subscribe to</div>
	<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 260 245" class="ml-2 mr-1 h-7">
		<path d="m56,237 74-228 74,228L10,96h240" />
	</svg>
	<div class="font-serif">The Red Star Advertiser!</div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="ms-2 h-5 rtl:rotate-180"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
		/>
	</svg>
</a>
