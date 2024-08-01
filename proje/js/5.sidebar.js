const Button=document.querySelector('.sidebar-toggle');
const closeBtn=document.querySelector('.close-btn');
const Sidebar=document.querySelector('.sidebar');

Button.addEventListener("click",function(){
    Sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click",function(){
    Sidebar.classList.remove("show-sidebar");
});