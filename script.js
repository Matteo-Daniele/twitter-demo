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
    imagesArray = [];
    galleryImage.innerHTML = "";
    inputImages.value = '';
}
const postContainer = document.getElementById("post-container");
const inputBox = document.getElementById("input-box");
function addPost(){
    if(inputBox.value === ''){
        closePopup();
    }
    else{
        const postObject = {
            personeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4XOtsk1cyAzAKjvGDtjTlc85bp7dt5SGzQ&usqp=CAU",
            name: "Personita",
            nameAt: "@Personita",
            text: inputBox.value,
            images: imagesArray,
        };
        let galImg = document.createElement("div");
        galImg.classList.add("galleryCopy");
        renderImages(galImg, imagesArray);
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
        imgBox.classList.add("img-person-post");
        imgBox.style.backgroundImage = 'url("'+ postObject.personeImage +'")';
        textPost.innerHTML = postObject.text;
        personName.innerHTML = postObject.name;
        personAt.innerHTML = postObject.nameAt;
        removePost.innerHTML = "\u00d7";
        personName.appendChild(personAt);
        insideBox.appendChild(personName);
        insideBox.appendChild(textPost);
        insideBox.appendChild(galImg);
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
let inputImages = document.getElementById("file");
let imagesArray = [];
let galleryImage = document.getElementById("galleryImage");
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
function renderImages(galleryImg, imgArray){
    galleryImg.innerHTML = "";
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
    for(let i = 0; i < imgArray.length; i++){
        let url = imgArray[i];
        let imageGallery = document.createElement("img");
        imageGallery.classList.add("images-gallery");
        imageGallery.src = url;
        if(imgArray.length <= 2){
            if(i === 0 && divContainerRightImages.childElementCount === 0){
                console.log("La dimension del array es " + imgArray.length);
                divContainerRightImages.appendChild(imageGallery);
                //divContainerRightImages.appendChild(removeImage);
                divContainerRightImages.classList.add("divs-images-popup");
                divContainerRightImages.classList.add("images-popup-right");
                galleryImg.appendChild(divContainerRightImages);
            }else if(i === 1 && divContainerLeftImages.childElementCount === 0){
                divContainerLeftImages.appendChild(imageGallery);
                //divContainerLeftImages.appendChild(removeImage);
                divContainerLeftImages.classList.add("divs-images-popup");
                //divContainerRightImages.children[1].classList.remove("left-position-temporary");
                divContainerLeftImages.classList.add("images-popup-left");
                divContainerRightImages.classList.add("images-popup-right-width");
                galleryImg.appendChild(divContainerLeftImages);
            }
        }else{
            if(i === 0 && divContainerRightImagesTop.childElementCount === 0 && divContainerRightImages.childElementCount === 0){
                divContainerRightImagesTop.appendChild(imageGallery);
                //divContainerRightImagesTop.appendChild(removeImage);
                divContainerRightImages.appendChild(divContainerRightImagesTop);
                divContainerRightImages.classList.add("images-popup-right");
                galleryImg.appendChild(divContainerRightImages);
            }else if(i === 1 && divContainerLeftImagesTop.childElementCount === 0 && divContainerLeftImages.childElementCount === 0){
                divContainerLeftImagesTop.appendChild(imageGallery);
                //divContainerLeftImagesTop.appendChild(removeImage);
                divContainerLeftImages.appendChild(divContainerLeftImagesTop);
                divContainerLeftImagesTop.classList.add("div-height");
                divContainerLeftImages.classList.add("images-popup-left");
                divContainerRightImages.classList.add("images-popup-right-width");
                galleryImg.appendChild(divContainerLeftImages);
            }else if(i === 2 && divContainerRightImagesBot.childElementCount === 0){
                divContainerRightImagesBot.appendChild(imageGallery);
                //divContainerRightImagesBot.appendChild(removeImage);
                divContainerRightImages.appendChild(divContainerRightImagesBot);
            }else if(i === 3 && divContainerLeftImagesBot.childElementCount === 0){
                divContainerLeftImagesBot.appendChild(imageGallery);
                //divContainerLeftImagesBot.appendChild(removeImage);
                divContainerLeftImagesTop.classList.remove("div-height");
                divContainerLeftImages.appendChild(divContainerLeftImagesBot);
            }
        }
    } 
}
function saveAndRenderImages(event){
    console.log("1");
    loadFile(event);
    renderImages(galleryImage, imagesArray);
    console.log(galleryImage.childElementCount);
    addRemove(galleryImage);
}
function addRemove(galleryImg){
    for(let i = 0; i < galleryImg.childElementCount; i++){
        let removeImage = document.createElement("span"); 
        removeImage.innerHTML = "\u00d7";
        removeImage.classList.add("close");
        removeImage.classList.add("position-close-image");
        console.log(galleryImage.childElementCount);
        let child = galleryImage.children[i];
        let contador=0;
        for(let f = 0; f < child.childElementCount; f++){
            let removeImage2 = document.createElement("span"); 
            removeImage2.innerHTML = "\u00d7";
            removeImage2.classList.add("close");
            removeImage2.classList.add("position-close-image");
            console.log(child.childElementCount);
            let grandson = child.children[f];
            if(grandson.tagName === "DIV"){
                contador++;
                grandson.appendChild(removeImage2);
            }
        }
        if(contador === 0){
            child.appendChild(removeImage);
        }
        if(galleryImage.childElementCount === 1){
            child.children[1].classList.add("left-position-temporary");
        }else if(galleryImage.childElementCount === 2 && child.children[1].classList.contains("left-position-temporary")){
            child.children[1].classList.remove("left-position-temporary");
        }
    }
}
galleryImage.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        let elementRemoved = e.target.parentElement;
        let indice = imagesArray.indexOf(elementRemoved.children[0].src);
        if(indice !== -1){
            imagesArray.splice(indice, 1);
        }
        renderImages(galleryImage, imagesArray);
        addRemove(galleryImage);
    }
}, false);