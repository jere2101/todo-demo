<script lang="ts">
	import Nav from '../../lib/components/Layout/Nav.svelte';


</script>

<div class="flex flex-direction:column@xs h:100%  flex-direction:column-reverse">
	<Nav />
	
	<div class="h:100% overflow:auto bg:whitesmoke">
		<slot />
	</div>
</div>
