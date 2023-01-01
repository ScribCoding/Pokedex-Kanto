

let pokemon_container = document.getElementById("pokemon_container");
let kanto_pokemon_names = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak'];
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

const deleteAllPokemonButtons = () =>{
    let pokemon_container = document.getElementById("pokemon_container");
    for (i=0; i<50; i++){
        let pokemonButton = document.getElementById(i+1);

        pokemon_container.removeChild(pokemonButton);

    }
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
    //get all current showing elements and keep them in an array
    let showingPokemon = [];
    for (i=0; i<50; i++){
        html_pokemon = document.getElementById(i+1);
        //if the pokemon is showing in the container then push it's id in the stored array
        if(html_pokemon.classList.contains("pokemon")){
            showingPokemon.push(html_pokemon.id)
        }
    }
    console.log(showingPokemon);

    deleteAllPokemonButtons(); //deletes all current pokemon so we can make new pokemon display

    
    //create new array duplicating old one so the original isn't changed by sort
    let alpha_kanto_pokemon_names = Array.from(kanto_pokemon_names);
    //alphabetizes the duplicate names array
    alpha_kanto_pokemon_names.sort();


        for(pokemonAlphaIndex in alpha_kanto_pokemon_names){
            
            for (pokemonShowingIndex in showingPokemon){
                let showingID = showingPokemon[pokemonShowingIndex];
                if(alpha_kanto_pokemon_names[pokemonAlphaIndex] == kanto_pokemon_names[showingID-1]){   
                    
                    console.log(kanto_pokemon_names[showingID-1]); 
                    createPokemonButton(showingID-1);        
                }
        }
        }




}

document.getElementById("search_filter").addEventListener("input",function(){
    resetPokemonDisplay();
    for (i=0; i<50; i++){
    
        let pokemonName = (document.getElementById(i+1).name.toLowerCase());
        if(!(pokemonName.includes(this.value))){
            removePokemonButton(i);
       } else {
            addPokemonButton(i);

       }
    }
    
})

const hideAllPokemon = () =>{
    for (i=0; i<50; i++){
        removePokemonButton(i);
    }
}

const resetPokemonDisplay = () =>{
    deleteAllPokemonButtons();
    for (i=0; i<50; i++){
        createPokemonButton(i);
        addPokemonButton(i);
    }
    
}