const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAtk = document.getElementById("special-attack");
const specialDef = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const inputValidation = () => {
  if (searchInput.value === "") {
    alert("Pokémon not found");
  }
  const promise = getPokemon(searchInput.value);
  displayPokemon(promise);
};

const getPokemon = async (name) => {
  const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
  if (!res.ok) {
    alert("Pokémon not found");
  } else {
    return res;
  }
};

const displayPokemon = (promise) => {
  promise.then((res) => res.json())
    .then((data) => {
      pokeName.innerText = data.name.toUpperCase();
    })
}

searchBtn.addEventListener("click", inputValidation);