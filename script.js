let span = document.getElementById("cross");
span.innerHTML = "\u00d7";

let containerPopup = document.getElementById("popup-container");
let popup = document.getElementById("popup");
function openPopup(){
    containerPopup.classList.add("functionOpenContainer-popup");
    popup.classList.add("functionOpen-popup");
    inputBox.value = "";
}
function closePopup(){
    containerPopup.classList.remove("functionOpenContainer-popup");
    popup.classList.remove("functionOpen-popup");
    inputBox.value = "";
}
const postContainer = document.getElementById("post-container");
const inputBox = document.getElementById("input-box");

function addPost(){
    if(inputBox.value === ''){
        closePopup();
    }
    else{
        let article = document.createElement("article"); 
        let firstBox = document.createElement("div");
        let insideBox = document.createElement("div");
        let imgBox = document.createElement("div");
        let personName = document.createElement("h3");
        let personAt = document.createElement("span");
        let removePost = document.createElement("span");
        let textPost = document.createElement("p");
        removePost.classList.add("close");
        article.classList.add("post");
        firstBox.classList.add("postInLine");
        insideBox.classList.add("postInLine-inside");
        imgBox.classList.add("img-person");
        textPost.innerHTML = inputBox.value;
        personName.innerHTML = "Personita ";
        personAt.innerHTML = "@Personita";
        removePost.innerHTML = "\u00d7";
        personName.appendChild(personAt);
        insideBox.appendChild(personName);
        insideBox.appendChild(textPost);
        firstBox.appendChild(imgBox);
        firstBox.appendChild(insideBox);
        article.appendChild(firstBox);
        article.appendChild(removePost);
        postContainer.appendChild(article);
    }
    inputBox.value = "";
    saveData();
    closePopup();
}
postContainer.addEventListener("click", function(e){
     if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", postContainer.innerHTML);
}
function showTask(){
    postContainer.innerHTML = localStorage.getItem("data");
}
showTask();
const dropdowns = document.querySelector('.dropdown');
const selectDrop = document.querySelector('.select');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected')
function closeDropdown(){
    if(menu.classList.contains('menu-open')){
        menu.classList.remove('menu-open');
        dropdowns.classList.toggle('menu-open');
    }
}
selectDrop.addEventListener('click', (eve) =>{
    selectDrop.classList.toggle('select-clicked');
    menu.classList.toggle('menu-open');
    dropdowns.classList.toggle('menu-open');
    eve.stopPropagation();
});
options.forEach(option => {
    option.addEventListener('click', () =>{
        selected.innerText = option.innerText;
        selected.innerText = selected.innerText + ' can reply';
        selectDrop.classList.remove('select-clicked');
        menu.classList.remove('menu-open');
        dropdowns.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
    });
});
menu.addEventListener('click', (e) => {
    e.stopPropagation();
})
var galeryImage = document.getElementById("galeryImage");
var loadFile= function(event){
    galeryImage.style.backgroundImage = "url("+URL.createObjectURL(event.target.files[0])+")";
}