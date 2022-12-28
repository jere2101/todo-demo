<script>
	import { fade, scale } from 'svelte/transition';
	import { clickOutside } from '../directives/clickoutside';

	export let active = false;

	export function open() {
		active = true;
	}

	export function close() {
		active = false;
	}
</script>

{#if active}
	<div class="fixed bg:rgba(0,0,0,0.7) w:100% h:100% top:0 left:0" transition:fade />

	<div class="fixed w:100% h:100% top:0 left:0 flex align-items:center justify-content:center">
		<div
			transition:scale
			class="fixed bg:white p:20 r:5@2xs min-width:100% min-height:100%  min-width:unset@2xs min-height:unset@2xs  "
			use:clickOutside
			on:click_outside={() => {
				active = false;
			}}
		>
			<slot />
		</div>
	</div>
{/if}
