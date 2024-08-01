const url='https://maps.google.com/maps?q=Akedemik%Topcubasov%23a&t=&z=15&ie=UTF8&iwloc=&output=embed';
const apiKey='f0e4f0d36f67a172e5edb7d31fc0dfeb';

const apiUrl='http://api.positionstack.com/v1/forward?access_key=';
  
const Adres=document.querySelector('#adres');

const Src=document.querySelector('#gmap_canvas');

Adres.addEventListener("keypress",getApi);

function getApi(e){
    if(e.keyCode==13)
        getResult(Adres.value);
}

var myAdres;
function getResult(mapName){
    
    let query=`${apiUrl}${apiKey}&query=${mapName}`;
    fetch(query).then(response => response.json()).then(melumatlar => {
        for(var i=0;i<1000;i++)
        {
           if(melumatlar.data[i].country=="Azerbaijan")
           {
                myAdres=melumatlar.data[i].label;
                break;
           }
        }
        var a=myAdres.replace(/ /g,"%20");
        console.log(a);
    Src.src=`https://maps.google.com/maps?q=${a}t=&z=15&ie=UTF8&iwloc=&output=embed`;   
});
}