

let pokemon_container = document.getElementById("pokemon_container");
let kanto_pokemon_names = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];
let kanto_pokemon_types =[["grass","poison"],["grass","poison"],["grass","poison"],["fire"],["fire"],["fire","flying"],["water"],["water"],["water"],["bug"],["bug"],["bug","flying"],["bug","poison"],["bug","poison"],["bug","poison"],["normal","flying"],["normal","flying"],["normal","flying"],["normal"],["normal"],["normal","flying"],["normal","flying"],["poison"],["poison"],["electric"],["electric"],["ground"],["ground"],["poison"],["poison"],["poison","ground"],["poison"],["poison"],["poison","ground"],["normal"],["normal"],["fire"],["fire"],["normal"],["normal"],["poison","flying"],["poison","flying"],["grass","poison"],["grass","poison"],["grass","poison"],["bug","grass"],["bug","grass"],["bug","poison"],["bug","poison"],["ground"],["ground"],["normal"],["normal"],["water"],["water"],["fighting"],["fighting"],["fire"],["fire"],["water"],["water"],["water","fighting"],["psychic"],["psychic"],["psychic"],["fighting"],["fighting"],["fighting"],["grass","poison"],["grass","poison"],["grass","poison"],["water","poison"],["water","poison"],["rock","ground"],["rock","ground"],["rock","ground"],["fire"],["fire"],["water","psychic"],["water","psychic"],["electric","steel"],["electric","steel"],["normal","flying"],["normal","flying"],["normal","flying"],["water"],["water","ice"],["poison"],["poison"],["water"],["water","ice"],["ghost","poison"],["ghost","poison"],["ghost","poison"],["rock","ground"],["psychic"],["psychic"],["water"],["water"],["electric"],["electric"],["grass","psychic"],["grass","psychic"],["ground"],["ground"],["fight"],["fight"],["normal"],["poison"],["poison"],["ground","rock"],["ground","rock"],["normal"],["grass"],["normal"],["water"],["water"],["water"],["water"],["water"],["psychic","water"],["normal"],["bug","flying"],["ice","psychic"],["electric"],["fire"],["bug"],["normal"],["water"],["water","flying"],["water","ice"],["normal"],["normal"],["water"],["electric"],["fire"],["normal"],["rock","water"],["rock","water"],["rock","water"],["rock","water"],["rock","flying"],["normal"],["ice","flying"],["electric","flying"],["fire","flying"],["dragon"],["dragon"],["dragon","flying"],["psychic"],["psychic"]];
let kanto_pokemon = [];//object list
let pokemon_length = kanto_pokemon_names.length;
let type_filters = ["normal", "fighting", "flying", "poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon"];
let current_types = [];

console.log(kanto_pokemon_types.length);
class Pokemon{
    constructor(name, index, pokemonType){
        this.name = name;
        this.id = index;
        this.pokemonType = pokemonType;
    }
}





const createPokemonButton = (i) => {
    let pokemon_code = i+1
    //create a button element container for each pokemon
    let newPokemonButton = document.createElement("button");
    newPokemonButton.classList.add("pokemonShow")
    newPokemonButton.setAttribute("id",pokemon_code)
    newPokemonButton.setAttribute("name",kanto_pokemon_names[pokemon_code-1])
    newPokemonButton.setAttribute("value",kanto_pokemon_types[pokemon_code-1])
    //create object
    let newPokemon = new Pokemon(kanto_pokemon_names[pokemon_code-1], pokemon_code, kanto_pokemon_types[0]);
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
for (i=0; i<pokemon_length; i++){
    createPokemonButton(i);
}

//type filters-------------------------------------------------------------------------



//iterate through the type filter and add the event listener 
for(index in type_filters){
    
    (document.getElementById(type_filters[index])).addEventListener("change",function(){
        console.log("-------------------------------------------------NEW SELECTION------------------------------------------");
        console.log("the currenttypes array is: " + current_types)
       
        if(!current_types.includes(this.value)){
            current_types.push(this.value);
        } else {
            for(index in current_types){
                if(current_types[index] == this.value){
                    console.log("IMA DELETE: " + current_types[index])
                    current_types.splice(index, 1);
                }
            }
            
        }
        
        if(current_types.length==0){
            console.log("RESSETTT");
            resetPokemonDisplay();
            return;
        }
        console.log("the currenttypes array is after: " + current_types)
        
        for (i=0; i<pokemon_length; i++){//kanto pokemon array index
            let numberOfTypeMatch = 0;
            let selected = false;//restarts selected variable for the new pokemon
            for(j=0; j<kanto_pokemon_types[i].length;j++){//each pokemon's type array

                if(selected == true){
                    break;
                    }
                for(k=0; k<current_types.length;k++){//for each type for each pokemon, compare each type in current available types array
                    //console.log("the current pokemon is: " + document.getElementById(i+1).name);
                    //console.log("i = " + i + " j = " + j + " k = " + k);
                    //console.log(kanto_pokemon_types[i][j] + " " + current_types[k]);
                    //console.log((kanto_pokemon_types[i][j] == (current_types[k])));
                    //console.log("the current types array length is: " + current_types.length);
                    if(selected == true){
                        break;
                        }

                     //sets variable to track how many types the current pokemon matches
                    if(kanto_pokemon_types[i][j] == (current_types[k])){
                        numberOfTypeMatch++;
                        if(numberOfTypeMatch == current_types.length){
                            console.log("ITS A MATCH SO ADD THE BUTTON!");
                            selected = true;
                            addPokemonButton(i);
                            
                        }
                    }

                    if(selected == true){
                        break;
                    }
                }
                
            }
                if(selected == false){
                console.log("WRONG");
                removePokemonButton(i);
                }
        }



        


    });
}







const removePokemonButton = (i) =>{
    let pokemonButton = document.getElementById(i+1);
    pokemonButton.classList.remove("pokemonShow");
    pokemonButton.classList.add("pokemonHide");
}

const deleteAllPokemonButtons = () =>{
    let pokemon_container = document.getElementById("pokemon_container");
    for (i=0; i<pokemon_length; i++){
        let pokemonButton = document.getElementById(i+1);

        pokemon_container.removeChild(pokemonButton);

    }
}

const addPokemonButton = (i) =>{
    let pokemonButton = document.getElementById(i+1);
    pokemonButton.classList.remove("pokemonHide");
    pokemonButton.classList.add("pokemonShow");
}

const alphabetical = () =>{
    //get all current showing elements and keep them in an array
    let showingPokemon = [];
    for (i=0; i<pokemon_length; i++){
        html_pokemon = document.getElementById(i+1);
        //reset order of every element so that they can be rearranged later
        html_pokemon.style.order=0;
        //if the pokemon is showing in the container then push it's id in the stored array
        if(html_pokemon.classList.contains("pokemonShow")){
            showingPokemon.push(html_pokemon.id)
        }
    }
    

     //create new array duplicating old one so the original isn't changed by sort
     let alpha_kanto_pokemon_names = Array.from(kanto_pokemon_names);
     //alphabetizes the duplicate names array
     alpha_kanto_pokemon_names.sort();
 
        //order variable to track what order the elements should be in once found
        let order=0;
         for(pokemonAlphaIndex in alpha_kanto_pokemon_names){
             
             for (pokemonShowingIndex in showingPokemon){
                 let showingID = showingPokemon[pokemonShowingIndex];
                 if(alpha_kanto_pokemon_names[pokemonAlphaIndex] == kanto_pokemon_names[showingID-1]){   
                     console.log(kanto_pokemon_names[showingID-1]);
                     console.log(kanto_pokemon[showingID-1]);
                     order++;
                     console.log(order);
                     //use the object array to get the ID of the pokemon
                     document.getElementById(kanto_pokemon[showingID-1].id).style.order=order;
                            
                 }
         }
         }





}

const numerical = () => {
    for (i=0; i<pokemon_length; i++){
        html_pokemon = document.getElementById(i+1);
        html_pokemon.style.order=0;


    }

        


}

document.getElementById("search_filter").addEventListener("input",function(){
    resetPokemonDisplay();
    for (i=0; i<pokemon_length; i++){
    
        let pokemonName = (document.getElementById(i+1).name.toLowerCase());
        if(!(pokemonName.startsWith(this.value))){
            removePokemonButton(i);
       } else {
            addPokemonButton(i);

       }
    }
    
})

const hideAllPokemon = () =>{
    for (i=0; i<pokemon_length; i++){
        removePokemonButton(i);
    }
}

const resetPokemonDisplay = () =>{
    deleteAllPokemonButtons();
    for (i=0; i<pokemon_length; i++){
        createPokemonButton(i);
        addPokemonButton(i);
    }
    
}