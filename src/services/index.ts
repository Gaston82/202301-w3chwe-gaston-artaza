import type { Pokemon } from "../types/index.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = async (id: number): Promise<Pokemon[]> => {
  const pokemons = [];
  for (let index = 1; index < 152; index++) {
    const response = fetch(`${apiUrl}${id}`);
    pokemons.push(response);
  }

  const promises = await Promise.all(pokemons);
  const resolvePromises = promises.map(async (promises) => promises.json());

  const pokemonData = (await Promise.all(resolvePromises)) as Pokemon[];

  return pokemonData;
};

const pokemons = await getPokemons(150);
