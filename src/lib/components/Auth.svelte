<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	let loading = false;
	let email: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });

			if (error) throw error;

			alert('Check yout email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form
	on:submit|preventDefault={handleLogin}
	class="w:100% h:100% flex flex:col pt:50 align-items:center"
>
	<div class="min-width:300px max-width:400px">
		<h1 class="f:40 mb:5">Login</h1>
		<p class="f:20">Enter your E-Mail to get a Login Link</p>
		<div class="width:100%">
			<input
				class="width:100% h:45px p:10px|8px border:none bg:whitesmoke color:black outline:none f:20 r:5"
				type="email"
				placeholder="Your email"
				bind:value={email}
			/>
		</div>
		<div
			class="mt:20px w:100% h:45px border:none bg:var(--primary) r:5 color:black flex ai:center p:0|8px"
		>
			<input
				type="submit"
				class="p:none w:100% h:100% bg:transparent text-align:left  border:none outline:none f:20"
				value={loading ? 'Loading' : 'Submit magic link'}
				disabled={loading}
			/>

			<span class="material-symbols-outlined"> arrow_forward_ios </span>
		</div>
	</div>
</form>

<style lang="scss">
	input::placeholder {
		color: grey;
	}
</style>
