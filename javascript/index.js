let menuModal = document.getElementById('menu-modal');
let bodyElement = document.getElementById('body');
let oneMorebodyElement = document.getElementById('one-more');
let menuIcon = document.getElementById('menu-icon');
let isMenuModalOpen = false;


function displayMenuModal(){
    isMenuModalOpen = !isMenuModalOpen;
    if(isMenuModalOpen){
        menuModal.style.display = "block";
        bodyElement.style.opacity = 0.2;    
        bodyElement.style.backgroundColor = "black";
        oneMorebodyElement.style.opacity = 0.2;
        oneMorebodyElement.style.backgroundColor = "black";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }else{
        menuModal.style.display = "none";
        bodyElement.style.opacity = 1;    
        oneMorebodyElement.style.opacity = 1;
        bodyElement.style.backgroundColor = "hsl(220, 16%, 96%)";
        oneMorebodyElement.style.backgroundColor = "hsl(0, 0%, 98%)";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}
