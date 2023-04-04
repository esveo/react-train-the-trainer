// console.log("a");

// setTimeout(() => {
//   console.log("b");

//   setTimeout(() => {
//     console.log("d");
//   }, 4000);
// }, 5000);

// console.log("c");

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const delayedPromise = sleep(5000);

// const promise = delayedPromise;

// console.log("a");
// promise
//   .then(() => {
//     console.log("b");

//     return sleep(2000);
//   })
//   .then(() => {
//     console.log("d");
//   });
// console.log("c");

type PokemonResponse = {
  abilities: [];
};

function getPokemonByName(
  name: string
): Promise<PokemonResponse> {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((response) => {
      if (!response.ok) throw new Error("error");
      return response.json();
    })
    .then((data: PokemonResponse) => data);
}

async function getPokemonByNameAsync(name: string) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  if (!response.ok) throw new Error("error");
  const data = await response.json();
  return data as PokemonResponse;
}

console.log(getPokemonByNameAsync("pikachu"));

// getPokemonByName("pikachu").then((data) => {
//   console.log(data);
// });

export {};
