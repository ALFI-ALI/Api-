// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => {
//     // data is the JSON object returned by the API
//     const pokemonname = data.name;
//     const spriteURL = data.sprites.front_default;
//     const spriteBackIMGURL = data.sprites.back_default;
//     console.log(pokemonname);
//   })

//   async function fetchPokemonData() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pickachu`)
//     const data = await response.json();
//     console.log(data);
//    }



//    async function fetchPokemonData() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//     const data = await response.json();
//      console.log(data.name)
// }
// // fetchPokemonData();
// async function fetchPokemonData() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//     const data = await response.json();
//     return data;
// }
// fetchPokemonData().then((data) => console.log(data));

// async function fetchPokemonData() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//     const data = await response.json();
//     const pokemonInfo = {
//         name: data.name,
//         imageURL: data.data.sprites.front_default
//     }
//     return pokemonInfo;
// }
// fetchPokemonData().then((pokemonInfo) => console.log(pokemonInfo.imageURL));

// async function fetchPokemonData() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//     const data = await response.json();
//     const pokemonInfo = {
//         name: data.name,
//         imageURL: data.sprites.front_default
//     }
//     return pokemonInfo;
// }

// async function DisplayData() {
//     const pokemonInfo = await fetchPokemonData();
//     console.log(pokemonInfo.name);
// }
// DisplayData();
async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/wooper`)
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        imageURL: data.sprites.front_default,
        backImage: data.sprites.back_shiny
    }
    return pokemonInfo;
}

async function DisplayData() {
    const pokemonInfo = await fetchPokemonData();
    console.log(pokemonInfo.name);
    document.getElementById('pokemon-name').textContent = pokemonInfo.name;
    document.getElementById('pokemon-front-sprite').src = pokemonInfo.imageURL;
    document.getElementById('pokemon-back-sprite').src = pokemonInfo.backImage;
}
DisplayData();