<script>
	import '@master/css';
	import '../styles.scss';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabase } from '../lib/supabaseClient';

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

<slot />
