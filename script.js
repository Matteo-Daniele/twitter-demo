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

// Images Popup
const imagesArray = [];
var galleryImage = document.getElementById("galleryImage");
function loadFile(event){
    
        let eventTarget = event.target;
        let files = eventTarget.files;
        for(let i = 0; i < files.length; i++){
            let file = files[i];
            let url = URL.createObjectURL(file);
            imagesArray.push(url);
        }
        console.log("La dimension del array es " + imagesArray.length);
}
function renderImages(){
    galleryImage.innerHTML = "";
    let divContainerRightImages = document.createElement("div");
    let divContainerLeftImages = document.createElement("div");
    let divContainerLeftImagesTop = document.createElement("div");
    divContainerLeftImagesTop.classList.add("divs-images-popup");
    let divContainerLeftImagesBot = document.createElement("div");
    divContainerLeftImagesBot.classList.add("divs-images-popup");
    let divContainerRightImagesTop = document.createElement("div");
    divContainerRightImagesTop.classList.add("divs-images-popup");
    let divContainerRightImagesBot = document.createElement("div");
    divContainerRightImagesBot.classList.add("divs-images-popup");
    for(let i = 0; i < imagesArray.length; i++){
        let removeImage = document.createElement("span"); 
        removeImage.innerHTML = "\u00d7";
        removeImage.classList.add("close");
        removeImage.classList.add("position-close-image");
        let url = imagesArray[i];
        let imageGallery = document.createElement("img");
        imageGallery.classList.add("images-gallery");
        imageGallery.src = url;
        if(imagesArray.length <= 2){
            if(i === 0 && divContainerRightImages.childElementCount === 0){
                console.log("La dimension del array es " + imagesArray.length);
                divContainerRightImages.appendChild(imageGallery);
                divContainerRightImages.appendChild(removeImage);
                divContainerRightImages.classList.add("divs-images-popup");
                removeImage.classList.add("left-position-temporary");
                galleryImage.appendChild(divContainerRightImages);
                divContainerRightImages.classList.add("images-popup-right");
            }else if(i === 1 && divContainerLeftImages.childElementCount === 0){
                divContainerLeftImages.appendChild(imageGallery);
                divContainerLeftImages.appendChild(removeImage);
                divContainerLeftImages.classList.add("divs-images-popup");
                galleryImage.appendChild(divContainerLeftImages);
                divContainerRightImages.children[1].classList.remove("left-position-temporary");
                divContainerLeftImages.classList.add("images-popup-left");
                divContainerRightImages.classList.add("images-popup-right-width");
            }
        }else{
            if(i === 0 && divContainerRightImagesTop.childElementCount === 0 && divContainerRightImages.childElementCount === 0){
                divContainerRightImagesTop.appendChild(imageGallery);
                divContainerRightImagesTop.appendChild(removeImage);
                divContainerRightImages.appendChild(divContainerRightImagesTop);
                galleryImage.appendChild(divContainerRightImages);
                divContainerRightImages.classList.add("images-popup-right");
            }else if(i === 1 && divContainerLeftImagesTop.childElementCount === 0 && divContainerLeftImages.childElementCount === 0){
                divContainerLeftImagesTop.appendChild(imageGallery);
                divContainerLeftImagesTop.appendChild(removeImage);
                divContainerLeftImages.appendChild(divContainerLeftImagesTop);
                galleryImage.appendChild(divContainerLeftImages);
                divContainerLeftImagesTop.classList.add("div-height");
                divContainerLeftImages.classList.add("images-popup-left");
                divContainerRightImages.classList.add("images-popup-right-width");
            }else if(i === 2 && divContainerRightImagesBot.childElementCount === 0){
                divContainerRightImagesBot.appendChild(imageGallery);
                divContainerRightImagesBot.appendChild(removeImage);
                divContainerRightImages.appendChild(divContainerRightImagesBot);
            }else if(i === 3 && divContainerLeftImagesBot.childElementCount === 0){
                divContainerLeftImagesBot.appendChild(imageGallery);
                divContainerLeftImagesBot.appendChild(removeImage);
                divContainerLeftImagesTop.classList.remove("div-height");
                divContainerLeftImages.appendChild(divContainerLeftImagesBot);
            }
        }
    }  
    console.log("La dimension del array es " + imagesArray.length);
}
function saveAndRenderImages(event){
    console.log("1");
    loadFile(event);
    renderImages();
}
galleryImage.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        let elementRemoved = e.target.parentElement;
        let indice = imagesArray.indexOf(elementRemoved.children[0].src);
        if(indice !== -1){
            imagesArray.splice(indice, 1);
        }
        renderImages();
    }
}, false);