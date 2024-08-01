const OpenBtn=document.querySelector('.modal-btn');
const CloseBtn=document.querySelector('.close-btn');
const Modal=document.querySelector('.modal-overlay');

OpenBtn.addEventListener("click",function(){
    Modal.classList.toggle("open-modal");
});
CloseBtn.addEventListener("click",function(){
    Modal.classList.remove("open-modal");
})