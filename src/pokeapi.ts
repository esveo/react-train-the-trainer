export type PokemonSummary = { name: string; url: string };

export type AllPokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
};

export async function getAllPokemon(options: {
  limit: number;
  offset: number;
}) {
  const { limit, offset } = options;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok)
    throw new Error("Error during network request");

  const data: AllPokemonResponse = await response.json();

  return data;
}
