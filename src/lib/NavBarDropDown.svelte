<script lang="ts">
	let hovering: boolean = false;

	function hoverHandler() {
		hovering = !hovering;
	}
</script>

<div
	on:mouseenter={hoverHandler}
	on:mouseleave={hoverHandler}
	class="group"
	role="listbox"
	tabindex="0"
>
	<slot {hovering} />
</div>
