import { useEffect, useState } from "react";

function Pokemon() {
	const [pokemon, setPokemon] = useState([]);
	const [input, setInput] = useState("");
	const [filterPokemon, setFilterPokemon] = useState([]);

	useEffect(() => {
		async function cariPokemon() {
			const response = await fetch("https://pokeapi.deno.dev/pokemon");
			const data = await response.json();
			setPokemon(data);
			setFilterPokemon(data);
		}

		cariPokemon();
	}, []);

	useEffect(() => {
		let filter = pokemon.filter((item) =>
			item.name.toLowerCase().includes(input)
		);
		setFilterPokemon(filter);
	}, [input]);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<h1>Pokemon</h1>
			{pokemon.length == 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<input
						type="text"
						name="input"
						placeholder="cari pokemon"
						value={input}
						onChange={handleInput}
					/>
					{filterPokemon.map((item) => (
						<div style={{ backgroundColor: item.color }}>
							<img src={item.imageUrl} alt="" width={100} />
							<h3>{item.name}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Pokemon;
