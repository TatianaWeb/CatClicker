let CatClicks = 0;
function catClicker() {
    CatClicks += 1;
    document.getElementById("CatClicks").innerHTML = CatClicks;
};


let CatClicks1 = 0;
function catClicker1() {
    CatClicks += 1;
    document.getElementById("CatClicks1").innerHTML = CatClicks;
};

var cats = [
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

var createCatButton = function(cat) {
var container, nameLabel, catImg, counterLabel;  
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

var createCatListItem = function(cat) {
    var catListItem;  
    catListItem = document.createElement("li");  
    catListItem.className = "cats-list-item";  
    catListItem.innerHTML = cat.name;  
    catListItem.addEventListener("click", function() {  
      $content.innerHTML = "";  
      $content.appendChild(createCatElem(cat));  
    }, false);  
    return catListItem;  
  };
   
  var $content = document.getElementById("content"),  
      $catsList = document.getElementById("cats-list");  
  for (var i = 0; i < cats.length; i++) {    
    $catsList.appendChild(createCatListItem(cats[i]));  
  }
