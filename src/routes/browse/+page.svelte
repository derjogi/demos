<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let issues = data.issues
</script>

<h1>
	<span class="title"> Browse issues </span>
</h1>

<div class="issues">
	{#if (issues)}
	<ul>
		{#each issues as issue}
			<li>
				<a href={`/issues/${issue.id}`}>{issue.title}</a>
			</li>
		{/each}
	</ul>
		{/if}
</div>

<style>
</style>
