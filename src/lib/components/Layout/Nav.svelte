<script lang="ts">
	import { page } from "$app/stores";


	let navRoutes: Array<{ route: string; label: string; icon: string }> = [
		{ route: '/', label: 'Home', icon: 'home' },
		{ route: '/personal', label: 'Personal', icon: 'hot_tub' },
		{ route: '/projects', label: 'Projects', icon: 'export_notes' },
		{ route: '/account', label: 'Account', icon: 'person' }
	];
	$: activeRoute = '/' + $page.url.pathname.split('/')[1]
</script>

<nav class="h:70px flex justify-content:space-between justify-content:flex-start@xs gap:30px@xs align-items:center w:100% padding:10px|20px bb:solid|1px|rgba(0,0,0,0.1) box-shadow:8|8|gray-70">
	{#each navRoutes as route}
		<a class="text-decoration:none color:black flex flex-direction:column align-items:center flex-direction:row@2xs gap:5px@xs" href={route.route}>
			<span class="material-symbols-outlined p:1|10 r:10 " class:active={route.route === activeRoute}>{route.icon}</span>
			<div>{route.label}</div>
		</a>
	{/each}
</nav>


<style>
	.active {
		background-color: whitesmoke;
	}
</style>