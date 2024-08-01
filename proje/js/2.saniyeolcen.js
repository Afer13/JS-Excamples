var button1 = document.querySelector(".button1"),
  button2 = document.querySelector(".button2"),
  button3 = document.querySelector(".button3"),
  Sat = document.querySelector(".sat"),
  Deq = document.querySelector(".deq"),
  San = document.querySelector(".san"),
  Mil = document.querySelector(".mil"),
  sayi,
  Xsat=1,
  Xdeq=1,
  Xsan = 1,
  Xmil = 1,
  st,
  sp;
  function start(){
    st=setInterval(milli,10);
  }
function milli() {
    
    //mil
    if(Xmil<100){
    if (Xmil < 10) {
      Mil.innerHTML="0"+Xmil;
    } else {
      Mil.innerHTML=Xmil;
    }
    Xmil++;
  }
  else{
    Xmil=0;
}
//san
if(Xmil==0)
{
    if(Xsan<60)
    {
    if(Xsan<10)
    {
        San.innerHTML="0"+Xsan;
    }
    else{
        San.innerHTML=Xsan;
    }
    Xsan++;
}
else{
  Xsan=0;
}
}
//deqiqe
if(Xsan==0)
{
    if(Xdeq<60)
    {
        if(Xdeq<10){
            Deq.innerHTML="0"+Xdeq;
        }
        else{
            Deq.innerHTML=Xdeq;
        }
        Xdeq++;
    }
    else{
      Xdeq=0;
    }
}

//saat
if(Xdeq==0){
  if(Xsat<10)
  {
    Xsat.innerHTML="0"+Xsat;
  }
  else{
    Xsat.innerHTML=Xsat;
  }
}
}

function stop(){
  sp=clearInterval(st);
}
function restart(){
  Mil.innerHTML="00";
  San.innerHTML="00";
  Deq.innerHTML="00";
  Sat.innerHTML="00";
  sp=clearInterval(st);
  Xmil=1;
  Xsan=1;
  Xdeq=1;
  Xsat=1;
}
