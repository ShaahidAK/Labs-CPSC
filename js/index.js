const albumForm = document.querySelector("#album-form");
const albumTitleInput = document.querySelector("#album-title");
const albumDescriptionInput = document.querySelector("#album-description");
const albumArtSelect = document.querySelector("#album-art");

const titleHint = document.querySelector("#title-hint");
const descriptionHint = document.querySelector("#description-hint")
const artError = document.querySelector("#art-error");

let titleValid = false;
let descValid = false;
let artSelectValid = false;

albumForm.addEventListener("submit", onAlbumForm);
albumTitleInput.addEventListener("input", onHandleTitleInput);
albumDescriptionInput.addEventListener("input", onHandleDescriptionInput);
albumArtSelect.addEventListener("change",onHandleArtChange);

function onAlbumForm(e){
    e.preventDefault();

    const titleInputValue = albumTitleInput.value.trim();
    const descriptionInputValue = albumDescriptionInput.value.trim();
    const artOption = albumArtSelect.value;

    //specs said 15 or 10 characters and it was also different number of chars for description, so I went with the number that was appropriate
    if (!titleInputValue || titleInputValue.length > 15) {
        //ternary operator: basically helps with if statements allowing me to use 2 error messages;
        // firstly it validates the first code statement, if there is an error, it inputs the appropriate error message and other way as well
        titleHint.textContent = titleInputValue ?  "Album title must be 10 characters long" : "Album title can't be empty."; 
        albumTitleInput.classList.add("is-invalid");
        titleValid = false;
    }
    else{
        albumTitleInput.classList.remove("is-invalid");
        titleHint.textContent = "";
        titleValid = true;
    }

    if (!descriptionInputValue || descriptionInputValue.length > 30){
        descriptionHint.textContent = descriptionInputValue ? "Album Description can only hold 30 characters" : "Album Description can't be empty.";
        albumDescriptionInput.classList.add("is-invalid");
        descValid = false;
    }
    else{
        albumDescriptionInput.classList.remove("is-invalid");
        descriptionHint.textContent = "";
        descValid = true;
    }

    if (artOption === "" || artOption === "Select album art") {
        artError.textContent = "Please select album art.";
        albumArtSelect.classList.add("is-invalid");
        artSelectValid = false;
    }
    else{
        albumArtSelect.classList.remove("is-invalid"); 
        artError.textContent = ""; 
        artSelectValid = true;
    }


    switch (artOption) {
        case "mountains.jpg":
            renderAlbum("img/mountains.jpg", titleInputValue,descriptionInputValue);
            break;
        case "gazing_at_stars.jpg":
            renderAlbum("img/gazing_at_stars.jpg", titleInputValue,descriptionInputValue);
            break;
        case "cassette.jpg":
            renderAlbum("img/cassette.jpg", titleInputValue,descriptionInputValue);
            break;
        case "tv.jpg":
            renderAlbum("img/tv.jpg", titleInputValue,descriptionInputValue);
            break;
        }
    
    
}

function onHandleTitleInput(e){
    //checks to see if class has "is-invalid" if it does it removes it
    if(albumTitleInput.classList.contains("is-invalid"))
    {
        albumTitleInput.classList.remove("is-invalid")
        //clears my error message logic
        titleHint.textContent = "";
    }
};

function onHandleDescriptionInput(e){
if (albumDescriptionInput.classList.contains("is-invalid")){

    albumDescriptionInput.classList.remove("is-invalid")
    descriptionHint.textContent = "";
    }
};

function onHandleArtChange(e) {
    const artOption = albumArtSelect.value;
    //option is null show error message 
    if (artOption === "") {
        artError.textContent = "Please select album art.";
        albumArtSelect.classList.add("is-invalid");
    } else {
        //else remove error
        artError.textContent = "";
        albumArtSelect.classList.remove("is-invalid");
    }
}

function renderAlbum(selectedImage, title, description)
{
    const albumCard = document.querySelector(".card");
    const albumImage = albumCard.querySelector(".card-img-top");
    const albumTitle = albumCard.querySelector(".card-title");
    const albumDescription = albumCard.querySelector(".card-text");

    albumImage.src = selectedImage;
    albumTitle.textContent = title;
    albumDescription.textContent = description;
}




/*
link that helped with bootstrap errors:
https://getbootstrap.com/docs/5.0/forms/validation/
https://getbootstrap.com/docs/5.3/forms/validation/
*/








