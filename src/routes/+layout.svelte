<script>
	import '@master/css';
	import '../styles.scss';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabase } from '../lib/supabaseClient';
	import Auth from '../lib/components/Auth.svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

{#if !$page.data.session}
	<Auth />
{:else}
	<slot />
{/if}

<style lang="scss">
</style>
