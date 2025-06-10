<script lang="ts">
	import { issues } from '$lib/red_star/issues';

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
</script>

<ul role="list" class="divide-y divide-gray-100">
	{#each issues as issue}
		<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold text-gray-900">
						<a href="/redstar/{issue.number}">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							{months[issue.date.getMonth()]}
							{issue.date.getDate()}, {issue.date.getFullYear()}
						</a>
					</p>
					<p class="flex text-xs text-gray-500">
						Issue {issue.number}
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				{#if issue.editorial}
					<div class="hidden sm:flex sm:flex-col sm:items-end">
						<p class="text-sm text-gray-900">{issue.editorial.author},</p>
						<p class="text-xs text-gray-900">editorial</p>
					</div>
				{/if}
				<svg
					class="size-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
	{/each}
</ul>
