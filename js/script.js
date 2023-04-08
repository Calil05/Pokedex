const form = document.getElementById('form-pokemon');
const search = document.getElementById('search-pokemon');
const subButton = document.getElementById('find');

const nextArrow = document.getElementById('next-arrow');
const prevArrow = document.getElementById('prev-arrow');

var image = document.querySelector('img');

nextArrow.addEventListener('click', () => {

    if(search.value == 'NaN' || search.value == ""){
        search.value = '1';
    }

    let currentData = parseInt(search.value);
    let nextData = currentData+1;

    if (nextData >= 1011){
        nextData = 1;
    }

    let stringData = nextData.toString();

    search.value = stringData;
    subButton.click();
});

prevArrow.addEventListener('click', () => {

    if(search.value == 'NaN' || search.value == ""){
        search.value = '1';
    }

    let currentData = parseInt(search.value);
    let prevData = currentData-1;

    if (prevData <= 0){
        prevData = 1010;
    }

    let stringData = prevData.toString();  

    search.value = stringData;
    subButton.click();
});

form.addEventListener('submit', event => {
    event.preventDefault();

    var pokemonName = search.value;
    pokemonName = pokemonName.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        search.value = data.id;

        var nameFirstLetter = data.name.charAt(0);
        nameFirstLetter = nameFirstLetter.toUpperCase();
        var nameOtherLetter = data.name.slice(1);
        var fullName = nameFirstLetter + nameOtherLetter;
        
        var type01 = data.types[0].type.name;

        var type01FirstLetter = type01.charAt(0);
        type01FirstLetter = type01FirstLetter.toUpperCase();
        var type01OtherLetter = type01.slice(1);
        var fullType01 = type01FirstLetter + type01OtherLetter;

        var bar = false;

        if (data.types.length == 2){
            var type02 = data.types[1].type.name;

            var type02FirstLetter = type02.charAt(0);
            type02FirstLetter = type02FirstLetter.toUpperCase();
            var type02OtherLetter = type02.slice(1);
            var fullType02 = type02FirstLetter + type02OtherLetter;

            bar = true;
        }

        if (data.types[1] == undefined){
           var fullType02 = "";
        }

        if (bar == true){
            var activeBar = "/";
        }else{
            var activeBar = "";
        }

        var cor01 = "";
        var cor02 = "";

        switch (fullType01){
            case "Grass": 
                cor01 = "#7CFC00";
                break
            case "Water": 
                cor01 = "#4169E1";
                break
            case "Fire": 
                cor01 = "#FF8C00";
                break
            case "Electric": 
                cor01 = "FFD700";
                break
            case "Psychic": 
                cor01 = "#FF1493";
                break
            case "Ghost": 
                cor01 = "#483D8B";
                break
            case "Bug": 
                cor01 = "#90EE90";
                break
            case "Ground": 
                cor01 = "#CD853F";
                break
            case "Ice": 
                cor01 = "#B0E0E6";
                break
            case "Dark": 
                cor01 = "#363636";
                break
            case "Poison": 
                cor01 = "#8A2BE2";
                break
            case "Dragon": 
                cor01 = "#4B0082";
                break
            case "Fairy": 
                cor01 = "#EE82EE";
                break
            case "Fighting": 
                cor01 = "#B22222";
                break
            case "Flying": 
                cor01 = "#6495ED";
                break
            case "Rock": 
                cor01 = "#8B4513";
                break
            case "Steel": 
                cor01 = "#708090";
                break
            case "Normal":
                cor01 = "#FFDAB9";
                break
        }

        switch (fullType02){
            case "Grass": 
                cor02 = "#7CFC00";
                break
            case "Water": 
                cor02 = "#4169E1";
                break
            case "Fire": 
                cor02 = "#FF8C00";
                break
            case "Electric": 
                cor02 = "FFD700";
                break
            case "Psychic": 
                cor02 = "#FF1493";
                break
            case "Ghost": 
                cor02 = "#483D8B";
                break
            case "Bug": 
                cor02 = "#90EE90";
                break
            case "Ground": 
                cor02 = "#CD853F";
                break
            case "Ice": 
                cor02 = "#B0E0E6";
                break
            case "Dark": 
                cor02 = "#363636";
                break
            case "Poison": 
                cor02 = "#8A2BE2";
                break
            case "Dragon": 
                cor02 = "#4B0082";
                break
            case "Fairy": 
                cor02 = "#EE82EE";
                break
            case "Fighting": 
                cor02 = "#B22222";
                break
            case "Flying": 
                cor02 = "#6495ED";
                break
            case "Rock": 
                cor02 = "#8B4513";
                break
            case "Steel": 
                cor02 = "#708090";
                break
            case "Normal":
                cor02 = "#FFDAB9";
                break
        }

        var region = "";

        if (data.id <= 151){
            region = "Kanto";
        }else if (data.id > 151 && data.id <= 251){
            region = "Johto";
        }else if (data.id > 251 && data.id <= 386){
            region = "Hoenn";
        }else if (data.id > 386 && data.id <= 493){
            region = "Sinnoh";
        }else if (data.id > 493 && data.id <= 649){
            region = "Unova";
        }else if (data.id > 649 && data.id <= 721){
            region = "Kalos";
        }else if (data.id > 721 && data.id <= 809){
            region = "Alola";
        }else if (data.id > 809 && data.id <= 905){
            region = "Galar";
        }else{
            region = "Paldea";
        }

        var stringId = data.id.toString();
        var newId = "";

        if(data.id < 10){
            newId = "000" + stringId;
        }else if (data.id >= 10 && data.id < 100){
            newId = "00" + stringId;
        }else if (data.id >= 100 && data.id < 1000){
            newId = "0" + stringId;
        }else{
            newId = stringId;
        }   

        const pokemonInfo = document.getElementById('pokemon-box');
        pokemonInfo.innerHTML = `
            <div class="pokemon-box-img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                </div>
                
                <div class="info">
                    <h2>${fullName}</h2>
                    <span class="tipo1" id="tipo1" style="color:${cor01}">${fullType01}</span>
                    <span class="barra">${activeBar}</span>
                    <span class="tipo2" id="tipo2" style="color:${cor02}">${fullType02}</span>
                    <hr>

                    <p class="number">ID: ${newId}</p>
                    <p class="region">Região: ${region}</p>

                    <span class="altura">Altura: ${data.height / 10}m</span>
                    <span class="peso">Peso: ${data.weight / 10}Kg</span>
                    <hr>

                    <ul class="stats">
                        <h3>Status Base</h3>
                        <li class="hp">Hp: ${data.stats[0].base_stat}</li>
                        <li class="sp-attack">SP Atk: ${data.stats[3].base_stat}</li>
                        <li class="attack">Atk: ${data.stats[1].base_stat}</li>
                        <li class="sp-defense">SP Def: ${data.stats[4].base_stat}</li>
                        <li class="defense">Def: ${data.stats[2].base_stat}</li>
                        <li class="speed">Vel: ${data.stats[5].base_stat}</li> 
                    </ul>
                </div>  
                
            </div>
        `

    })
 
})