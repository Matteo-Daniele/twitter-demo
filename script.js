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
let divContainerRightImages = document.createElement("div");
let divContainerLeftImages = document.createElement("div");
let divContainerLeftImagesTop = document.createElement("div");
let divContainerLeftImagesBot = document.createElement("div");
let divContainerRightImagesTop = document.createElement("div");
let divContainerRightImagesBot = document.createElement("div");
function loadFile(event){
    
        let eventTarget = event.target;
        let files = eventTarget.files;
        for(let i = 0; i < files.length; i++){
            let file = files[i];
            let url = URL.createObjectURL(file);
            imagesArray.push(url);
        }
        console.log("La dimension del array es " + imagesArray.length);
        // console.log(i);
        // let imageGallery = document.createElement("img");
        // imageGallery.src = URL.createObjectURL(event.target.files[i]);
        // imageGallery.classList.add("images-gallery");
        // let removeImage = document.createElement("span"); 
        // removeImage.innerHTML = "\u00d7";
        // removeImage.classList.add("close");
        // removeImage.classList.add("position-close-image");
        //  if(i === 1 || i === 2){
        //      divContainerLeftImages.appendChild(imageGallery);
        //  }
        //  if(i === 0 || i === 3){
        //      divContainerRightImages.appendChild(imageGallery);
        // }    console.log(imagesArray);
    // for(let i=0; i<imagesArray.length - 1; i++){
    //     let imageGallery = document.createElement("img");
    //     imageGallery.classList.add("images-gallery");
    //     if(i === 0 && divContainerRightImagesTop.childElementCount === 0){
    //         imageGallery.src = imagesArray[i];
    //         divContainerRightImagesTop.appendChild(imageGallery);
    //         divContainerRightImages.appendChild(divContainerRightImagesTop);
    //     }else if(i % 2 === 0 && divContainerRightImagesTop.childElementCount === 1){
    //         imageGallery.src = imagesArray[i];
    //         divContainerRightImagesBot.appendChild(imageGallery);
    //         divContainerRightImages.appendChild(divContainerRightImagesBot);
    //     }
    //     if(i % 2 === 1 && divContainerLeftImagesTop.childElementCount === 0){
    //         imageGallery.src = imagesArray[i];
    //         divContainerLeftImagesTop.appendChild(imageGallery);
    //         divContainerLeftImages.appendChild(divContainerLeftImagesTop);
    //     }else if(i % 2 === 1 && divContainerLeftImagesTop.childElementCount === 1){
    //         imageGallery.src = imagesArray[i];
    //         divContainerLeftImagesBot.appendChild(imageGallery);
    //         divContainerLeftImages.appendChild(divContainerLeftImagesBot);
    //     }
    // }
    // if(divContainerRightImages.childElementCount === 2 && divContainerLeftImages.childElementCount === 0){

    //     let secondChild = divContainerRightImages.children[1];
    //     divContainerLeftImages.appendChild(secondChild);

    // }else if(divContainerRightImages.childElementCount === 2 && divContainerLeftImages.childElementCount === 1){
    //     let firstChildRight = divContainerRightImages.children[0];
    //     let secondChildRight = divContainerRightImages.children[1];

    //     divContainerRightImagesTop.appendChild(firstChildRight);
    //     divContainerRightImagesBot.appendChild(secondChildRight);
    
    //     divContainerRightImages.appendChild(divContainerRightImagesTop);
    //     divContainerRightImages.appendChild(divContainerRightImagesBot);
    
    // }else if(divContainerRightImages.childElementCount === 3 && divContainerLeftImages.childElementCount === 1){
    //     let lastChildRight = divContainerRightImages.children[2];
    //     let firstChildLeft = divContainerLeftImages.children[0];

    //     divContainerLeftImagesTop.appendChild(firstChildLeft);
    //     divContainerLeftImagesBot.appendChild(lastChildRight);

    //     divContainerLeftImages.appendChild(divContainerLeftImagesTop);
    //     divContainerLeftImages.appendChild(divContainerLeftImagesBot);
    // }
    // if(divContainerRightImages.childElementCount > 0){
    //     divContainerRightImages.classList.add("images-popup-right");
    // }
    // if(divContainerLeftImages.childElementCount > 0){
    //     divContainerLeftImages.classList.add("images-popup-left");
    //    divContainerRightImages.classList.add("images-popup-right-width");
    // }
}
function renderImages(){
    console.log("Tu wacha entra");
    let removeImage = document.createElement("span"); 
    removeImage.innerHTML = "\u00d7";
    removeImage.classList.add("close");
    removeImage.classList.add("position-close-image");
    for(let i = 0; i < imagesArray.length; i++){
        let url = imagesArray[i];
        let imageGallery = document.createElement("img");
        imageGallery.classList.add("images-gallery");
        imageGallery.src = url;
        if(i === 0 && divContainerRightImagesTop.childElementCount === 0){
            divContainerRightImagesTop.appendChild(imageGallery);
            divContainerRightImages.appendChild(divContainerRightImagesTop);
            galleryImage.appendChild(divContainerRightImages);
            divContainerRightImages.classList.add("images-popup-right");
        }else if(i === 1 && divContainerLeftImagesTop.childElementCount === 0){
            divContainerLeftImagesTop.appendChild(imageGallery);
            divContainerLeftImages.appendChild(divContainerLeftImagesTop);
            galleryImage.appendChild(divContainerLeftImages);
            divContainerLeftImages.classList.add("images-popup-left");
            divContainerRightImages.classList.add("images-popup-right-width");
        }else if(i === 2 && divContainerRightImagesBot.childElementCount === 0){
            divContainerRightImagesBot.appendChild(imageGallery);
            divContainerRightImages.appendChild(divContainerRightImagesBot);
        }else if(i === 3 && divContainerLeftImagesBot.childElementCount === 0){
            divContainerLeftImagesBot.appendChild(imageGallery);
            divContainerLeftImages.appendChild(divContainerLeftImagesBot);
        }
    }  
}
function saveAndRenderImages(event){
    console.log("1");
    loadFile(event);
    renderImages();
}