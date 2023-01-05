

let pokemon_container = document.getElementById("pokemon_container");
let kanto_pokemon_names = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];
let kanto_pokemon_types =[["grass","poison"],["grass","poison"],["grass","poison"],["fire"],["fire"],["fire","flying"],["water"],["water"],["water"],["bug"],["bug"],["bug","flying"],["bug","poison"],["bug","poison"],["bug","poison"],["normal","flying"],["normal","flying"],["normal","flying"],["normal"],["normal"],["normal","flying"],["normal","flying"],["poison"],["poison"],["electric"],["electric"],["ground"],["ground"],["poison"],["poison"],["poison","ground"],["poison"],["poison"],["poison","ground"],["normal"],["normal"],["fire"],["fire"],["normal"],["normal"],["poison","flying"],["poison","flying"],["grass","poison"],["grass","poison"],["grass","poison"],["bug","grass"],["bug","grass"],["bug","poison"],["bug","poison"],["ground"],["ground"],["normal"],["normal"],["water"],["water"],["fighting"],["fighting"],["fire"],["fire"],["water"],["water"],["water","fighting"],["psychic"],["psychic"],["psychic"],["fighting"],["fighting"],["fighting"],["grass","poison"],["grass","poison"],["grass","poison"],["water","poison"],["water","poison"],["rock","ground"],["rock","ground"],["rock","ground"],["fire"],["fire"],["water","psychic"],["water","psychic"],["electric","steel"],["electric","steel"],["normal","flying"],["normal","flying"],["normal","flying"],["water"],["water","ice"],["poison"],["poison"],["water"],["water","ice"],["ghost","poison"],["ghost","poison"],["ghost","poison"],["rock","ground"],["psychic"],["psychic"],["water"],["water"],["electric"],["electric"],["grass","psychic"],["grass","psychic"],["ground"],["ground"],["fight"],["fight"],["normal"],["poison"],["poison"],["ground","rock"],["ground","rock"],["normal"],["grass"],["normal"],["water"],["water"],["water"],["water"],["water"],["psychic","water"],["normal"],["bug","flying"],["ice","psychic"],["electric"],["fire"],["bug"],["normal"],["water"],["water","flying"],["water","ice"],["normal"],["normal"],["water"],["electric"],["fire"],["normal"],["rock","water"],["rock","water"],["rock","water"],["rock","water"],["rock","flying"],["normal"],["ice","flying"],["electric","flying"],["fire","flying"],["dragon"],["dragon"],["dragon","flying"],["psychic"],["psychic"]];
let stats_battle =[[45, 49, 49, 65, 65, 45],[60,62,63,80,80,60],[80,82,83,100,100,80],[39,52,43,60,50,65],[58,64,58,80,65,80],[78,84,78,109,85,100],[44,48,65,60,64,43],[59,63,80,65,80,58],[79,83,100,85,105,78],[45,30,35,20,20,45],[50,20,55,25,25,30],[60,45,50,90,80,70],[40,35,30,20,20,50],[45,25,50,25,25,35],[65,90,40,45,80,75],[40,45,40,35,35,56],[63,60,55,50,50,71],[83,80,75,70,70,101],[30,56,35,25,35,72],[55,81,60,50,70,97],[40,60,30,31,31,70],[65,90,65,61,61,100],[35,60,44,40,54,55],[60,95,69,65,79,80],[35,55,40,50,50,90],[60,90,55,90,90,110],[50,75,85,20,30,40],[75,100,110,45,55,65],[55,47,52,40,40,41],[70,62,67,55,55,56],[90,92,87,75,85,76],[46,57,40,40,40,50],[61,72,57,55,55,65],[81,102,77,85,75,85],[70,45,48,60,65,35],[95,70,73,95,90,60],[38,41,40,50,65,65],[73,76,75,81,100,100],[115,45,20,45,25,20],[140,70,45,85,50,45],[40,45,35,30,40,55],[75,80,70,65,75,90],[45,50,55,75,65,30],[60,65,70,85,75,40],[75,80,85,110,90,50],[35,70,55,45,55,25],[60,95,80,60,80,30],[60,55,50,40,55,45],[70,65,60,90,75,90],[10,55,25,35,45,95],[35,100,50,50,70,120],[40,45,35,40,40,90],[65,70,60,65,65,115],[50,52,48,65,50,55],[80,82,78,95,80,85],[40,80,35,35,45,70],[65,105,60,60,70,95],[55,70,45,70,50,60],[90,110,80,100,80,95],[40,50,40,40,40,90],[65,65,65,50,50,90],[90,95,95,70,90,70],[25,20,15,105,55,90],[40,35,30,120,70,105],[55,50,45,135,95,120],[70,80,50,35,35,35],[80,100,70,50,60,45],[90,130,80,65,85,55],[50,75,35,70,30,40],[65,90,50,85,45,55],[80,105,65,100,70,70],[40,40,35,50,100,70],[80,70,65,80,120,100],[40,80,100,30,30,20],[55,95,115,45,45,35],[80,120,130,55,65,45],[50,85,55,65,65,90],[65,100,70,80,80,105],[90,65,65,40,40,15],[95,75,110,100,80,30],[25,35,70,95,55,45],[50,60,95,120,70,70],[52,90,55,58,62,60],[35,85,45,35,35,75],[60,110,70,60,60,110],[65,45,55,45,70,45],[90,70,80,70,95,70],[80,80,50,40,50,25],[105,105,75,65,100,50],[30,65,100,45,25,40],[50,95,180,85,45,70],[30,35,30,100,35,80],[45,50,45,115,55,95],[60,65,60,130,75,110],[35,45,160,30,45,70],[60,48,45,43,90,42],[85,72,70,73,115,67],[30,105,90,25,25,50],[55,130,115,50,50,75],[40,30,50,55,55,100],[60,50,70,80,80,150],[60,40,80,60,45,40],[95,95,85,125,75,55],[50,50,95,40,50,35],[60,80,110,50,80,45],[50,120,53,35,110,87],[50,105,79,35,110,76],[90,55,75,60,75,30],[40,65,95,60,45,35],[65,90,120,85,70,60],[80,85,95,30,30,25],[105,130,120,45,45,40],[250,5,5,35,105,50],[65,55,115,100,40,60],[105,95,80,40,80,90],[30,40,70,70,25,60],[55,65,95,95,45,85],[45,67,60,35,50,63],[80,92,65,65,80,68],[30,45,55,70,55,85],[60,75,85,100,85,115],[40,45,65,100,120,90],[70,110,80,55,80,105],[65,50,35,115,95,95],[65,83,57,95,85,105],[65,95,57,100,85,93],[65,125,100,55,70,85],[75,100,95,40,70,110],[20,10,55,15,20,80],[95,125,79,60,100,81],[130,85,80,85,95,60],[48,48,48,48,48,48],[55,55,50,45,65,55],[130,65,60,110,95,65],[65,65,60,110,95,130],[65,130,60,95,110,65],[65,60,70,85,75,40],[35,40,100,90,55,35],[70,60,125,115,70,55],[30,80,90,55,45,55],[60,115,105,65,70,80],[80,105,65,60,75,130],[160,110,65,65,110,30],[90,85,100,95,125,85],[90,90,85,125,90,100],[90,100,90,125,85,90],[41,64,45,50,50,50],[61,84,65,70,70,70],[91,134,95,100,100,80],[106,110,90,154,90,130],[100,100,100,100,100,100]];
let kanto_pokemon = [];//object list
let pokemon_length = kanto_pokemon_names.length;
let type_filters = ["normal", "fighting", "flying", "poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon"];

let current_types = [];
let pokemon_button_active = false;//to track if a buttons already been clicked
//title-----------------------------------------------------------------------------------
let chosenTitle = "KANTO POKEDEX";
let titleArray = chosenTitle.split("");
let title = document.getElementById("title");
for(chars in titleArray){
    let currentLetter = titleArray[chars];
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id","title_letter"+chars)
    newDiv.innerHTML = (currentLetter);

    if(currentLetter.match(" ")){
        newDiv.style.backgroundImage = "url(graphics/ui_elements/pokeball_logo.png)";
        //newDiv.innerHTML = "&nbsp;"
    }
    title.appendChild(newDiv);
}



for(chars in titleArray){
    let title_letter_element = document.getElementById("title_letter"+chars);
    title_letter_element.addEventListener("mouseover",function(){

        this.style.animation = "title_letter_turn 1s";
    })
}

for(chars in titleArray){
    let title_letter_element = document.getElementById("title_letter"+chars);
    title_letter_element.addEventListener("animationend",function(){

        this.style.animation = "";
    })
}

//-------------------------------------------------------------------------------------------





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
    newPokemonButton.setAttribute("hp",stats_battle[pokemon_code-1][0])
    newPokemonButton.setAttribute("attack",stats_battle[pokemon_code-1][1])
    newPokemonButton.setAttribute("defense",stats_battle[pokemon_code-1][2])
    newPokemonButton.setAttribute("spattack",stats_battle[pokemon_code-1][3])
    newPokemonButton.setAttribute("spdefense",stats_battle[pokemon_code-1][4])
    newPokemonButton.setAttribute("speed",stats_battle[pokemon_code-1][5])
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

    //DESCRIPTION BOX------------------------------------------------------------------------------------------
    let pokemon_content_image = document.getElementById("pokemon_content_image")



    newPokemonButton.addEventListener("mouseover",function(){
    if(pokemon_button_active==false){
       if(!(document.getElementById("pokemon_image").classList.contains("showActive"))){
            pokemon_content_image.setAttribute("src","graphics/pokedex_icons/pokemon ("+this.id+").png");
            document.getElementById("pokemon_image").classList.add("show");
            
        }
    }
    })


    newPokemonButton.addEventListener("mouseout",function(){
    if(pokemon_button_active==false){
        document.getElementById("pokemon_image").classList.remove("show");
    }
    
    
    })

    newPokemonButton.addEventListener("click",function(){       
        disableRenableActiveButton(this.id);
        statsType(this.id);
        statsBattle(this.id);
        statsName(this.id);
    })
}

const disableRenableActiveButton = (buttonID) =>{

    for(let i = 0; i<pokemon_length;i++){

        if((document.getElementById(i+1).classList.contains("pokemonShowClicked"))){

            hidePokemonImage();
            document.getElementById(i+1).classList.remove("pokemonShowClicked")

        }
    }
    setTimeout(() => {
        pokemon_content_image.setAttribute("src","graphics/pokedex_icons/pokemon ("+buttonID+").png");
        document.getElementById("pokemon_image").classList.add("show");
        setTimeout(() => {
            document.getElementById("pokemon_image").classList.add("showActive");
            document.getElementById(buttonID).classList.add("pokemonShowClicked");
            pokemon_button_active == true;
        }, 50);
    }, 100);
}
const disableActiveButton = () =>{
    for(let i = 0; i<pokemon_length;i++){
        
        if((document.getElementById(i+1).classList.contains("pokemonShowClicked"))){

            hidePokemonImage();
            document.getElementById(i+1).classList.remove("pokemonShowClicked")

        }
    }
}

const hidePokemonImage = () =>{
    document.getElementById("pokemon_image").classList.remove("show");
    document.getElementById("pokemon_image").classList.remove("showActive");
}

const statsType = (buttonID) =>{
    let pokemon_button_type = document.getElementById(buttonID).value;
    formatted_pokemon_type = pokemon_button_type.replace(","," ");
    let stats_type = document.getElementById("stats_type");
    stats_type.innerHTML = formatted_pokemon_type;

}

const statsBattle = (buttonID) => {
    let r = document.querySelector(":root");
    rs = getComputedStyle(r); //gets style properties of the root
    let barRatio = 1;
    let pokemon_button_hp = document.getElementById(buttonID).getAttribute("hp");
    r.style.setProperty("--hpBar", pokemon_button_hp*barRatio + "px");
    let pokemon_button_attack = document.getElementById(buttonID).getAttribute("attack");
    r.style.setProperty("--attackBar", pokemon_button_attack*barRatio + "px");
    let pokemon_button_defense = document.getElementById(buttonID).getAttribute("defense");
    r.style.setProperty("--defenseBar", pokemon_button_defense*barRatio + "px");
    let pokemon_button_spattack = document.getElementById(buttonID).getAttribute("spattack");
    r.style.setProperty("--spattackBar", pokemon_button_spattack*barRatio + "px");
    let pokemon_button_spdefense = document.getElementById(buttonID).getAttribute("spdefense");
    r.style.setProperty("--spdefenseBar", pokemon_button_spdefense*barRatio + "px");
    let pokemon_button_speed = document.getElementById(buttonID).getAttribute("speed");
    r.style.setProperty("--speedBar", pokemon_button_speed*barRatio + "px");

    document.getElementById("hp_text").innerHTML = pokemon_button_hp;
    document.getElementById("attack_text").innerHTML = pokemon_button_attack;
    document.getElementById("defense_text").innerHTML = pokemon_button_defense;
    document.getElementById("spattack_text").innerHTML = pokemon_button_spattack;
    document.getElementById("spdefense_text").innerHTML = pokemon_button_spdefense;
    document.getElementById("speed_text").innerHTML = pokemon_button_speed;

}

const statsName = (buttonID) =>{
    let pokemon_button_name = document.getElementById(buttonID).name;
    document.getElementById("stats_name").innerHTML = pokemon_button_name;
}




const resetStats = () =>{

    let pokemon_button_name = document.getElementById(buttonID).name;
    document.getElementById("stats_name").innerHTML = "";

    let stats_type = document.getElementById("stats_type");
    stats_type.innerHTML = "";

    let r = document.querySelector(":root");
    rs = getComputedStyle(r); //gets style properties of the root

    r.style.setProperty("--hpBar", 0 + "px");
    r.style.setProperty("--attackBar", 0 + "px");
    r.style.setProperty("--defenseBar", 0 + "px");
    r.style.setProperty("--spattackBar", 0 + "px");
    r.style.setProperty("--spdefenseBar", 0 + "px");
    r.style.setProperty("--speedBar", 0 + "px");

    document.getElementById("hp_text").innerHTML = 0;
    document.getElementById("attack_text").innerHTML = 0;
    document.getElementById("defense_text").innerHTML = 0;
    document.getElementById("spattack_text").innerHTML = 0;
    document.getElementById("spdefense_text").innerHTML = 0;
    document.getElementById("speed_text").innerHTML = 0;
}
//creates pokemon relative to the names list --------------------------------------------------------------
for (i=0; i<pokemon_length; i++){
    createPokemonButton(i);
}


//type filters-------------------------------------------------------------------------
//iterate through the type filter and add the event listener 
for(index in type_filters){
    
    (document.getElementById(type_filters[index])).addEventListener("change",function(){
        
        if(!current_types.includes(this.value)){
            current_types.push(this.value);
        } else {
            for(index in current_types){
                if(current_types[index] == this.value){

                    current_types.splice(index, 1);
                }
            }
            
        }
        
        if(current_types.length==0){

            resetPokemonDisplay();
            return;
        }

        
        for (i=0; i<pokemon_length; i++){//kanto pokemon array index
            let numberOfTypeMatch = 0;
            let selected = false;//restarts selected variable for the new pokemon
            for(j=0; j<kanto_pokemon_types[i].length;j++){//each pokemon's type array

                if(selected == true){
                    break;
                    }
                for(k=0; k<current_types.length;k++){//for each type for each pokemon, compare each type in current available types array
                   
                    if(selected == true){
                        break;
                        }

                     //sets variable to track how many types the current pokemon matches
                    if(kanto_pokemon_types[i][j] == (current_types[k])){
                        numberOfTypeMatch++;
                        if(numberOfTypeMatch == current_types.length){
                           
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
                     order++;
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

const randomize = () =>{
    randomIndex = Math.floor(Math.random() * (151 - 1)) + 1;
    for(i = 0; i<pokemon_length;i++){
        if(i==randomIndex){
            addPokemonButton(i);
        }else{
            removePokemonButton(i);
        }
    }
}

document.getElementById("search_filter").addEventListener("input",function(){
    
    
    
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








