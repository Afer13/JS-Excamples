//const url='https://api.openweathermap.org/data/2.5/';
const url='https://api.openweathermap.org/data/2.5/weather?q='
const key1='8c762e8015e87088c27988331b79a82e';

const Body=document.querySelector('#body');

const City=document.querySelector('.city');
const Temp=document.querySelector('.temp');
const Desc=document.querySelector('.desc');
const Minmax=document.querySelector('.minmax');
const WindSpeed=document.querySelector('#speed');

const searchBar=document.querySelector('#searchBar');

function getLoad(){
    let query='https://api.openweathermap.org/data/2.5/weather?q=Bakı&units=metric&lang=az&appid=8c762e8015e87088c27988331b79a82e';
    fetch(query).then(response => response.json()).then(data=>{
        City.innerText=data.name +" / "+data.sys.country;
        Temp.innerText=Math.round(data.main.temp)+"°C";
        Desc.innerText=data.weather[0].description;
        Minmax.innerText=Math.round(data.main.temp_min)+"°C"+" / "+Math.round(data.main.temp_max)+"°C";
        WindSpeed.innerText=data.wind.speed +" km/saat";
});
}


const setQuery = (e) => {
    if(e.keyCode==13)
    getResult(searchBar.value);
}

searchBar.addEventListener("keypress",setQuery);



const getResult = (cityName) => {
    let query=`${url}${cityName}&units=metric&lang=az&appid=${key1}`;

    fetch(query).then(response => response.json()).then(data=>{
            City.innerText=data.name +" / "+data.sys.country;
            Temp.innerText=Math.round(data.main.temp)+"°C";
            Desc.innerText=data.weather[0].description;
            Minmax.innerText=Math.round(data.main.temp_min)+"°C"+" / "+Math.round(data.main.temp_max)+"°C";
            WindSpeed.innerText=data.wind.speed +" km/saat";
    });
};


