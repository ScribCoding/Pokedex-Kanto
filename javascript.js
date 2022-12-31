

let pokemon_container = document.getElementById("pokemon_container");

for (i=0; i<202; i++){
    let newPokemon = document.createElement("div");
    newPokemon.classList.add("pokemon")
    newPokemon.setAttribute("id",i)
    newPokemon.innerHTML = i+1;
    pokemon_container.appendChild(newPokemon);
}

document.getElementById("pokemon");
