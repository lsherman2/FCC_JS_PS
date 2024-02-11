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
const sprite = document.getElementById("img");

const inputValidation = () => {
  let nameId = searchInput.value;
  if (!parseInt(nameId)) {
    nameId = nameId.toLowerCase();
  }

  if (nameId === "") {
    alert("Please enter a Pokémon name or id");
  }

  const promise = getPokemon(nameId);
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
      console.log(data);
      pokeName.innerText = data.name.toUpperCase();
      pokeId.innerText = data.id;
      weight.innerText = data.weight;
      height.innerText = data.height;
      hp.innerText = data.stats[0].base_stat;
      attack.innerText = data.stats[1].base_stat;
      defense.innerText = data.stats[2].base_stat;
      specialAtk.innerText = data.stats[3].base_stat;
      specialDef.innerText = data.stats[4].base_stat;
      speed.innerText = data.stats[5].base_stat;

      sprite.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`

      types.innerText = data.types;
    })
}

searchBtn.addEventListener("click", inputValidation);