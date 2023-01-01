

let pokemon_container = document.getElementById("pokemon_container");
let kanto_pokemon_names = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran', 'Nidorina', 'Nidoqueen', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak'];
let kanto_pokemon = [];


class Pokemon{
    constructor(name, index){
        this.name = name;
        this.code = index;

    }
}

const createPokemonButton = (i) => {
    let pokemon_code = i+1
    //create a button element container for each pokemon
    let newPokemonButton = document.createElement("button");
    newPokemonButton.classList.add("pokemon")
    newPokemonButton.setAttribute("id",pokemon_code)
    newPokemonButton.setAttribute("name",kanto_pokemon_names[pokemon_code-1])

    //create object
    let newPokemon = new Pokemon(kanto_pokemon_names[pokemon_code-1], pokemon_code);
    kanto_pokemon.push(newPokemon);
    //get pokemon image relative to its pokemon code index
    try{
        newPokemonButton.style.backgroundImage = "url(graphics/pixel_icons/" + pokemon_code + ".png)";
    }
    catch{
        newPokemonButton.style.backgroundImage = "url(graphics/pixel_icons/1.png)";
    }
    //add the button element into the pokemon display container
    pokemon_container.appendChild(newPokemonButton);

}

//creates pokemon relative to the names list --------------------------------------------------------------
for (i=0; i<50; i++){
    createPokemonButton(i);
}



const removePokemonButton = (i) =>{
    let pokemonButton = document.getElementById(i+1);
    pokemonButton.classList.remove("pokemon");
    pokemonButton.classList.add("pokemonHide");
}

const addPokemonButton = (i) =>{
    let pokemonButton = document.getElementById(i+1);
    pokemonButton.classList.remove("pokemonHide");
    pokemonButton.classList.add("pokemon");
}



for (i=0; i<50; i++){
//document.getElementById(i).onmouseenter(function(){


//})

}

const alphabetical = () =>{

}

document.getElementById("search_filter").addEventListener("input",function(){
    for (i=0; i<50; i++){
        console.log(document.getElementById(i+1).name.toLowerCase());
    
        let pokemonName = (document.getElementById(i+1).name.toLowerCase());
        if(!(pokemonName.includes(this.value))){
            removePokemonButton(i);
       } else {
            addPokemonButton(i);

       }
    }
    
})

