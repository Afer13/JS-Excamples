const Links=document.querySelector('.links');
const Button=document.querySelector('.nav-toggle');

    Button.addEventListener("click",function(){
        Links.classList.toggle("show-links");
    });