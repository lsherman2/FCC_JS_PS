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
  getPokemon(searchInput.value);
};

const getPokemon = (name) => {
  const arr = [];
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`)
    .then((res) => {
      if (!res.ok) {
        throw "Pokémon not found";
      } else {
        res.json();
      }
    })
    .then((data) => {
      arr = data;
    })
    .catch((err) => alert(err));
    return arr
};

const displayPokemon = (arr) => {
  
}

searchBtn.addEventListener("click", inputValidation);