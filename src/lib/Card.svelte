<script lang="ts">
	import type { NewsItemType } from '$lib/Types';
	export let newsItem: NewsItemType;
</script>

<div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm m-4 bg-[#d7e7b5]">
	{#if newsItem.image}
		<a href="#">
			<img class="rounded-t-lg" src={newsItem.image} alt="" />
		</a>
	{/if}

	<div class="p-5">
		{#if newsItem.title}
			<a href="#">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{newsItem.title}
				</h5>
			</a>
		{/if}
		<p class="mb-3 text-sm font-normal text-gray-700">
			{newsItem.content}
		</p>
		<a
			href={newsItem.href}
			target="_blank"
			class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
		>
			{newsItem.source}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
				/>
			</svg>
		</a>
	</div>
</div>
