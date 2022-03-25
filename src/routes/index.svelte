<script context="module">
	export async function load({ params, fetch }) {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
		const res = await fetch(url);
		const data = await res.json();

		const loadedPokemon = data.results.map((data, index) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		return { props: { pokemon: loadedPokemon } };
	}
</script>

<script>
	import PokemanCard from '../Components/pokemanCard.svelte';
	export let pokemon;

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<main>
	<div class="container">
		<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit</h1>

		<input
			class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
			type="text"
			bind:value={searchTerm}
			placeohlder="Search Pokemon"
		/>

		<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
			{#each filteredPokemon as pokeman}
				<PokemanCard {pokeman} />
			{/each}
		</div>
	</div>
</main>
