import { useEffect, useState } from "react";
import {
  AllPokemonResponse,
  getAllPokemon,
} from "./pokeapi";

const delays = [100, 5000, 1000];
let i = 0;

export function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const [response, setResponse] =
    useState<null | AllPokemonResponse>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 5000);
    let requestCancelled = false;

    const requestIndex = i++;
    console.log("EFFECT RUN!", requestIndex);
    setTimeout(() => {
      getAllPokemon({
        limit: pageSize,
        offset: (page - 1) * pageSize,
      }).then((data) => {
        if (!requestCancelled) {
          setResponse(data);
        }
      });
    }, delays[requestIndex % delays.length]);

    return () => {
      console.log("EFFECT CLEANUP", requestIndex);
      requestCancelled = true;
      clearInterval(intervalId);
    };
  }, [page, pageSize]);

  return (
    <>
      <h1>Hello world</h1>
      <ul>
        {response?.results.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.url.split("/").at(-2)} - {pokemon.name}
          </li>
        ))}
      </ul>
      {response && (
        <div>
          {response.previous && (
            <button onClick={() => setPage(page - 1)}>
              {"<"}
            </button>
          )}
          {page}
          {response.next && (
            <button onClick={() => setPage(page + 1)}>
              {">"}
            </button>
          )}
        </div>
      )}
    </>
  );
}
