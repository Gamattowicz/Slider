//Array with data image's source and title's text
dataList = [{
        img: "images/img1.jpg",
        text: 'First picture'
    },
    {
        img: "images/img2.jpg",
        text: 'Second picture'
    },
    {
        img: "images/img3.jpg",
        text: 'Third picture'
    },
    {
        img: "images/img4.jpg",
        text: 'Forth picture'
    },
    {
        img: "images/img5.jpg",
        text: 'Fifth picture'
    },
    {
        img: "images/img6.jpg",
        text: 'Sixth picture'
    },
    {
        img: "images/img7.jpg",
        text: 'Seventh picture'
    },
    {
        img: "images/img8.jpg",
        text: 'Eighth picture'
    },
    {
        img: "images/img9.jpg",
        text: 'Ninth picture'
    }
];

const image = document.querySelector('img.slider');
const mainText = document.querySelector('h1.title');
const subText = document.querySelector('div.element-text');
const dots = [...document.querySelectorAll('div.dots span')];
let active = 0;

//Time when images should change themselves in milliseconds
const time = 1500;

const changeDots = () => {
    const currentDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[currentDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeImg = () => {
    active++;
    if (active === dataList.length) {
        active = 0;
    }
    image.src = dataList[active].img;
    mainText.textContent = dataList[active].text;
    changeDots()
}

setInterval(changeImg, time)