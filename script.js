const button = document.querySelector('.content__button');
const text = document.querySelector('.content__text');
const image = document.querySelector('.content__image');
const startRandom = document.querySelector('.start-random');

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

function getRandomNameAndLink() {
    const randomElement = getRandomElement(plases);
    text.textContent = randomElement.name;
    image.src = randomElement.link;
}

button.addEventListener('click', function() {
    getRandomNameAndLink();
    button.textContent = getRandomElement(buttonText);
});