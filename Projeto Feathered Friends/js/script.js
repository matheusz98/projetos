// Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ //Once window loaded
    filterItem.onclick = (selectedItem)=>{ //When user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){ // If user click element has .item class
            filterItem.querySelector(".active").classList.remove("active"); // Remove the active class which is in the first element
            selectedItem.target.classList.add("active"); // Add that active class on the user selected element or item
            let filterName = selectedItem.target.getAttribute("data-name"); // Getting data-name value of the user selected item and storing in a filtername variable
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name"); // Getting image data-name value
                // If user selected item data-name value is equal to image data-name value
                // Or user selected item data-name value is equal to "all"
                if((filterImages == filterName) || filterName == "all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }

    for(let index = 0; index < filterImg.length; index++){
        filterImg[index].setAttribute("onclick", "preview(this)"); // Adding onclick attribute in all available images
    }
}

// Selecting all required elements
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");


// Fullscreen preview image function
function preview(element){
    // Once user click on any image then remove the scrollbar of the body, so user can't scroll up or down
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; // Getting user clicked image source link and store in a variable
    let selectedImgCategory = element.getAttribute("data-name"); // Getting user clicked data-name value
    categoryName.textContent = selectedImgCategory; // Passing the data-name value to parrot name variable
    previewImg.src = selectedPrevImg; // Passing the user clicked image source in the preview image source
    previewBox.classList.add("show"); // Show the preview box
    shadow.classList.add("show"); // Show the light grey background
    closeIcon.onclick = ()=>{ // If user click on the close icon of the preview box
        previewBox.classList.remove("show"); // Hide the preview box
        shadow.classList.remove("show"); // Hide the light grey background
        document.querySelector("body").style.overflow = "scroll"; // Show the scroll bar of body
    }
}