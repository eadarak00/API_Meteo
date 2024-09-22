let input =  document.getElementById('input');
let btnInput =  document.getElementById('btn-input');
const API_KEY = '88d7efb84b6e8aa9600cf60c0756cecf'
const queryObject = {
    name : '',
    lat : 0,
    lon : 0
}

const submit = (e) => {
    e.preventDefault();
    let valeur = input.value.trim();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${valeur}&limits=1&appid=${API_KEY}`)
    .then(reponse => reponse.json())  // Extraire le JSON de la réponse
    .then(cord => {
        queryObject.name = cord[0].name;
        queryObject.lat= cord[0].lat;
        queryObject.lon = cord[0].lon;
        fetchAPI(queryObject);
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
}

function fetchAPI(o){
    console.log(o);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.8342&lon=-17.1061&appid=5d2d2550732e3dbfc81725ddc89e7d90`)
    .then(response => response.json())
    .then(data=> {
        console.log('weather : ', data)
    })
    .catch(error => {
        console.error('Erreur SERVER :', error);
    });
}

btnInput.addEventListener('click', submit);
document.addEventListener("DOMContentLoaded", fetchAPI);