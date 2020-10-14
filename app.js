// linking with html
const imgContainer = document.querySelector(".img-container");
const image = document.querySelectorAll(".images");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
let score = 0;

const img = ["img/1.webp", "img/2.webp", "img/3.webp"];

// event listeners
image.forEach(img => {
    img.addEventListener("click", showImages);
});

let arr = [];
let arr2 = [];
// resetting the game 
reset.addEventListener("click", () => {
    image.forEach((img) => {
        img.innerHTML = "";
        img.disabled = false;
        img.classList.add("show");
    });
    score = 0;
    total.innerHTML = score;
});

// showing image after the users clicks the img-container
function showImages(e) {
    const imageDOM = e.currentTarget;
    const imgIndex = Math.floor(Math.random() * img.length);

    imageDOM.innerHTML =
        `<img src=${img[imgIndex]} style="height:300px; width:300px;">`;
    const a = [imageDOM.innerHTML, ...arr2];
    arr2 = a;

    const attr = document.createAttribute("data-id");
    attr.value = imgIndex;
    imageDOM.setAttributeNode(attr);
    const id = imageDOM.dataset.id;
    const cardId = [id, ...arr];
    arr = cardId;

    imageDOM.disabled = true;

    // when the both the values of array matches increasing the score
    if (arr[0] === arr[1]) {
        score++;
        total.innerHTML = score;
    }

    if (arr.length >= 2) {
        arr.length = 0;
    }

    // delteing the image from the card after the length of arr2 is 2 
    if (arr2.length == 2) {
        image.forEach(img => {
            img.disabled = true;
        });
        setTimeout(() => {
            // imageDOM.innerHTML = "";
            image.forEach((img) => {
                img.innerHTML = "";
                img.disabled = false;
            });
        }, 700);
        arr2.length = 0;
    }
}