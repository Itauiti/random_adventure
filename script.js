const plases = [{
        name: 'Решено, едешь в Туву танцевать с шаманами, кушать из чашки в юрте, смотреть на бескрайние просторы!',
        link: 'https://sun9-69.userapi.com/c849220/v849220624/ead1d/NiejcmwEpiE.jpg'
    },
    {
        name: 'Решено, едешь в Ергаки обляпать все походное снаряжение черникой, побывать в отеле тысячи звезд, мечтать.',
        link: 'https://sun9-53.userapi.com/c837133/v837133590/4b0e6/JRowQiC8HVo.jpg'
    },
    {
        name: 'Решено, едешь в Ергаки обляпать все походное снаряжение черникой, побывать в отеле тысячи звезд, мечтать.',
        link: 'https://sun9-6.userapi.com/c837133/v837133590/4b1a3/1_0A2Krr2IA.jpg'
    },
    {
        name: 'Решено, едешь в Ергаки обляпать все походное снаряжение черникой, побывать в отеле тысячи звезд, мечтать.',
        link: 'https://sun9-20.userapi.com/c837133/v837133590/4b186/LsO9dJyHe10.jpg'
    },
    {
        name: 'Решено, едешь в Туву танцевать с шаманами, кушать из чашки в юрте, смотреть на бескрайние просторы!',
        link: 'https://sun9-58.userapi.com/c855216/v855216400/1f143/AufKRCEjMLw.jpg'
    },
    {
        name: 'Решено, едешь в Туву танцевать с шаманами, кушать из чашки в юрте, смотреть на бескрайние просторы!',
        link: 'https://sun9-27.userapi.com/c847124/v847124624/15fe2a/LJGxmCjbHSU.jpg'
    },
    {
        name: 'Решено, едешь в Крым смотреть на всех с высоты, объедать сады, повидаться с морем в конце концов, пора уже...',
        link: 'https://sun9-11.userapi.com/c845122/v845122566/184c03/yQVb72rdLOo.jpg'
    },
    {
        name: 'Решено, едешь в Крым смотреть на всех с высоты, объедать сады, повидаться с морем в конце концов, пора уже...',
        link: 'https://sun9-43.userapi.com/c845122/v845122566/184e9f/NCtu5OXjC54.jpg'
    },
    {
        name: 'Решено, едешь в Киргизию гулять по "марсу", купаться в озере с волнами достойных моря, есть дыни и арбузы!',
        link: 'https://sun9-60.userapi.com/c845021/v845021898/5ef33/Cjc3QQc9rdU.jpg'
    },
    {
        name: 'Решено, едешь в Киргизию гулять по "марсу", купаться в озере с волнами достойных моря, есть дыни и арбузы!',
        link: 'https://sun9-49.userapi.com/c845021/v845021898/5efaa/vYiuVLbVLx8.jpg'
    },
    {
        name: 'Решено, едешь в Грузию за дружеблюбнешней атмосферой, красивой природой и для познания слова «Шемомечама».',
        link: 'https://sun9-45.userapi.com/c850036/v850036624/eb1b1/3sfsKQvPLao.jpg'
    },
    {
        name: 'Решено, едешь в Грузию за дружеблюбнешней атмосферой, красивой природой и для познания слова «Шемомечама».',
        link: 'https://sun9-51.userapi.com/c850036/v850036624/eb165/0vfyxazQ9qU.jpg'
    },
    {
        name: 'Решено, едешь в Грузию за дружеблюбнешней атмосферой, красивой природой и для познания слова «Шемомечама».',
        link: 'https://sun9-63.userapi.com/c847123/v847123742/2ec4b/HJKkJaxpgcI.jpg'
    },
    {
        name: 'Решено, едешь на Байкал слушать чарующую тишину, есть «разбивайку», гулять по нереальным узорам льда.',
        link: 'https://sun9-57.userapi.com/c638716/v638716590/67054/Ovb4Vuwdjng.jpg'
    },
    {
        name: 'Решено, едешь на Байкал слушать чарующую тишину, есть «разбивайку», гулять по нереальным узорам льда.',
        link: 'https://sun9-49.userapi.com/c638716/v638716590/66ec2/ixwvlXFzkxs.jpg'
    },
    {
        name: 'Решено, едешь на Байкал слушать чарующую тишину, есть «разбивайку», гулять по нереальным узорам льда.',
        link: 'https://sun9-67.userapi.com/c638716/v638716590/66eea/Pv9cLWPt6Uk.jpg'
    },
    {
        name: 'Решено, едешь на Алтай за невероятно разнообразной природой, послушать потрескивания костра и звуки леса.',
        link: 'https://sun9-56.userapi.com/c845420/v845420229/e579d/5-d_Gzi8564.jpg'
    },
    {
        name: 'Решено, едешь на Алтай за невероятно разнообразной природой, послушать потрескивания костра и звуки леса.',
        link: 'https://sun9-70.userapi.com/c845020/v845020437/6da2e/TdsEw1sGf2Y.jpg'
    },
    {
        name: 'Решено, едешь на Алтай за невероятно разнообразной природой, послушать потрескивания костра и звуки леса.',
        link: 'https://sun9-11.userapi.com/c623900/v623900742/113b3a/YwEt3rUHWyU.jpg'
    },
];

const buttonText = [
    "Ну, давай еще",
    "Другой бы",
    "Ммммммм",
    "Подумаем",
]

const button = document.querySelector('.button');
const phrase = document.querySelector('.phrase');
const image = document.querySelector('.image');
const startRandom = document.querySelector('.start-random');

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

function getRandomNameAndLink() {
    const randomElement = getRandomElement(plases);
    phrase.textContent = randomElement.name;
    image.src = randomElement.link;
}

button.addEventListener('click', function() {
    getRandomNameAndLink();
    button.textContent = getRandomElement(buttonText);
});