<script>
	import Nav from '../Components/nav.svelte';
</script>

<header class="absolute">
	<Nav />
</header>

<div class="p-8 w-2/3 mx-auto">
	<slot />
</div>

<p class="footer">Shapes</p>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.absolute {
		position: absolute;
		width: 100%;
	}

	.footer {
		margin: 3rem 0;
		text-align: center;
	}
</style>
