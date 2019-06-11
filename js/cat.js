/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Cat0',
            imgSrc : 'img/cat.jpg',
            imgAttribution : ''
        },
        {
            clickCount : 0,
            name : 'Cat1',
            imgSrc : 'img/cat1.jpg',
            imgAttribution : ''
        },
        {
            clickCount : 0,
            name : 'Cat2',
            imgSrc : 'img/cat2.jpg',
            imgAttribution : ''
        },
        {
            clickCount : 0,
            name : 'Cat3',
            imgSrc : 'img/cat3.jpg',
            imgAttribution : ''
        },
        {
            clickCount : 0,
            name : 'Cat4',
            imgSrc : 'img/cat4.jpg',
            imgAttribution : ''
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};


/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat_name');
        this.catImageElem = document.getElementById('cat_img');
        this.countElem = document.getElementById('cat_count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cats_list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();



/* let CatClicks = 0;
function catClicker() {
    CatClicks += 1;
    document.getElementById("CatClicks").innerHTML = CatClicks;
};


let CatClicks1 = 0;
function catClicker1() {
    CatClicks1 += 1;
    document.getElementById("CatClicks1").innerHTML = CatClicks1;
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

var createCatElem = function(cat) {
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
 */
