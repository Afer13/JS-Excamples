//zaman teyin etme icaze buttonu 

var btnOk=document.querySelector('#okGeri');
btnOk.addEventListener("click",function(){
    document.querySelector('#vaxt').style.display="flex";
    btnOk.style.display="none";
    
});
//legv etme buttonu
var btnNo=document.querySelector('.btnNo');
btnNo.addEventListener("click",function(){
    btnNo.style.display="none";
    document.querySelector('#vaxt').style.display="none";
    btnOk.style.display="inline-block";
});

//Zamanin onaylanmasi(Ok) butonu
var Str;
var Ok=document.querySelector('#btnOk');

function okok(){
  document.querySelector('#vaxt').style.display="none";
var Il1=document.querySelector('#il').value;
var Ay1=document.querySelector('#ay').value;
var Gun1=document.querySelector('#gun').value;
var Sat1=document.querySelector('#sat').value;
var Deq1=document.querySelector('#deq').value;
btnOk.style.display="inline-block";
if(Ay1<10) Ay1="0"+Ay1;
if(Gun1<10) Gun1="0"+Gun1;
if(Sat1<10) Sat1="0"+Sat1;
if(Deq1<10) Deq1="0"+Deq1;
Str=Il1+" "+Ay1+" "+Gun1+" "+Sat1+":"+Deq1;
};

//start funksiyasi
var stop;
function start() {
  stop = setInterval(hesablama, 1000);
}
//gerimsayim funksiyasi
function hesablama() {
  var Svaxt;
  var Ivaxt = new Date();
  if(Str==undefined)
  {
    Svaxt=new Date("2022 09 15 09:00");
  }
  else
    Svaxt = new Date(Str);

  var K = Ivaxt.getTime();
  var G = Svaxt.getTime();
  var Mil = G - K;
  var x = Math.floor(Mil / 1000);
  var gT, gQ, sT, sQ, dT, dQ, san;
  //hesablama
  //gun
  if (x >= 86400) {
    gT = Math.floor(x / 86400);
    gQ = x % 86400;
  } else if (x < 86400) {
    gT = 0;
    gQ = x;
  }
  //saat
  if (gQ >= 3600) {
    sT = Math.floor(gQ / 3600);
    sQ = gQ % 3600;
  } else if (gQ < 3600) {
    sT = 0;
    sQ = gQ;
  }
  //deqiqe
  if (sQ >= 60) {
    dT = Math.floor(sQ / 60);
    dQ = sQ % 60;
  } else if (sQ < 60) {
    dT = 0;
    dQ = sQ;
  }
  //saniye
  san = dQ;
  //hesablama son

  //son beraberlikler
  var Gun = gT,
    Sat = sT,
    Deq = dT,
    San = san;
  //Beraberlesdirilen elementler
  var getGun = document.querySelector(".days");
  var getSat = document.querySelector(".hours");
  var getDeq = document.querySelector(".minutes");
  var getSan = document.querySelector(".seconds");
  //ilk
  if (Sat < 10) getSat.innerHTML = "0" + Sat; else getSat.innerHTML = Sat;
  if (Deq < 10) getDeq.innerHTML = "0" + Deq; else getDeq.innerHTML = Deq;
  if (San < 10) getSan.innerHTML = "0" + San; else getSan.innerHTML = San;
  
  getGun.innerHTML = Gun; 


  if (San <= 0 && Deq <= 0 && Sat <= 0 && Gun <= 0) {
    getGun.innerHTML = "00";
  getSat.innerHTML = "00";
  getDeq.innerHTML = "00";
  getSan.innerHTML = "00";
    clearInterval(stop);
    document.querySelector("#son").style.display = "block";
  }
}
start();

