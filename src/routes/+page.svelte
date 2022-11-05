<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Search from "./components/Search.svelte"
	import {Button} from "carbon-components-svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="DEMOS Prototype" />
</svelte:head>

<h1>
	<span class="title">
		WELCOME to DEMOS
	</span>
</h1>

<!--	main navigation   -->
<div class="actions">
	<Search/>
	<Button href="/browse">Browse</Button>
	<Button href="/create">Create</Button>
</div>

<style>
	.actions {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		flex: 0.6;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.title {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		text-align: center;
	}

	.title img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
