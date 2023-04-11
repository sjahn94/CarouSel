const faceImg = document.querySelector('.faceImg');
const nickname = document.querySelector('.nickname');
const job = document.querySelector('.job');
const content = document.querySelector('.content');
const btn = document.querySelectorAll('.button');

const imgList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
const nameList = ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"];
const jobList = ["WEB DEVELOPER", "WEB DESIGNER", "INTERN", "THE BOSS"];
const contentList = ["I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."];

let count = 0;

document.addEventListener("DOMContentLoaded", () => {
    faceImg.src = `resources/${imgList[count]}`;
    nickname.innerText = `${nameList[count]}`;
    job.textContent = `${jobList[count]}`;
    content.textContent = `${contentList[count]}`;
});


btn[0].addEventListener('click', () => {
    if(count <= 0){ count++;}
    count--;
    faceImg.src = `resources/${imgList[count]}`;
    nickname.innerText = `${nameList[count]}`;
    job.textContent = `${jobList[count]}`;
    content.textContent = `${contentList[count]}`;
});


btn[1].addEventListener('click', () => {
    if(count >= imgList.length-1) { count--;}
    count++;
    faceImg.src = `resources/${imgList[count]}`;
    nickname.innerText = `${nameList[count]}`;
    job.textContent = `${jobList[count]}`;
    content.textContent = `${contentList[count]}`;
});
