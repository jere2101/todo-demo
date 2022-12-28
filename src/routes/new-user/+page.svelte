<script>
	import { enhance } from '$app/forms';
</script>

<form method="POST" use:enhance class="w:100% h:100% flex flex:col pt:50 align-items:center">
	<div class="min-widt:300px max-width:400px">
		<h1 class="f:40 mb:5">New User Setup</h1>
		<p class="f:20">You have to enter the following Information to use the app</p>

		<div class="width:100%">
			<input
				class="width:100% h:45px p:10px|8px border:none bg:whitesmoke color:black outline:none f:20 border-radius:5"
				placeholder="Username"
				type="text"
				name="username"
			/>
		</div>
		<div class="width:100%">
			<input
				class="width:100% h:45px p:10px|8px border:none bg:whitesmoke color:black outline:none f:20 border-radius:5 mt:10px"
				placeholder="Name"
				type="text"
				name="name"
			/>
		</div>
		<div
			class="mt:20px w:100% h:45px  border:none bg:var(--primary) border-radius:5 color:black flex ai:center p:0|8px"
		>
			<input
				type="submit"
				class="p:none w:100% h:100% bg:transparent text-align:left  border:none outline:none f:20"
				value="Submit user Information"
			/>

			<span class="material-symbols-outlined"> arrow_forward_ios </span>
		</div>
	</div>
</form>
