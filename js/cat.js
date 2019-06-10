let CatClicks = 0;
function catClicker() {
    CatClicks += 1;
    document.getElementById("CatClicks").innerHTML = CatClicks;
};

const cats = [
{  
name: "Nifff",  
imgSrc: "img/cat.jpg",
counter: 0  
},  
{  
    name: "Nufff",  
    imgSrc: "img/cat1.jpg",  
    counter: 0  
},  
{  
    name: "Noufff",  
    imgSrc: "img/cat2.jpg",  
    counter: 0  
},  
];

const createCatButton = function(cat) {
const container, nameLabel, catImg, counterLabel;  
container = document.createElement("div"); 
container.className = "container text_c";  
nameLabel = document.createElement("h2");  
nameLabel.className = "name";  
nameLabel.innerHTML = cat.name;  
catImg = document.createElement("img");  
catImg.className = "cat-img";  
catImg.alt = "Cat Image";  
catImg.src = cat.imgSrc;  
counterLabel = document.createElement("h2");  
counterLabel.className = "counter"; 
counterLabel.innerHTML = cat.counter;  
catImg.addEventListener("click", function() {  
    counterLabel.innerHTML = ++cat.counter;  
}, false);
container.appendChild(nameLabel);
container.appendChild(catImg);
container.appendChild(counterLabel);
return container;
};
