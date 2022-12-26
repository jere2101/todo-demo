<script>
	import { supabase } from '../lib/supabaseClient';

	function signOut() {
		supabase.auth.signOut();
	}
</script>

<button on:click={signOut}>Sign Out</button>
