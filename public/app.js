var app = function() {


addCat("Mr T(iddles)", "milk that tastes funny", "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg");

};

var addCat = function(catName, favFood, catImageURL){
  var catsSection = createCatsSection();
  var catUl = createCatUl();
  var catName = createCatName(catName);
  var favFood = createFavFood(favFood);
  // var catImage = createCatImage(catName);

  appendElements(catsSection, catUl, catName, favFood, catImage)

const createCatsSection = function(){
  var catsSection = document.createElement('section');
  quoteArticle.classList.add('cats');
  return catsSection;
}

const createCatUl = function(){
  var catUl = document.createElement('ul');
  quoteArticle.classList.add('cat');
  return catUl;
}

const createCatName = function(catName){
  var catName = document.createElement('li');
  li.textContent = catName;
  return catName;
}

const createFavFood = function(favFood){
  var favFood = document.createElement('li');
  li.textContent = favFood;
  return favFood;
}

const createCatImage = function(catImageURL){
  var catImageURL = document.createElement('li');
  li.innerHTML = "<img src=\"" + catImageURL + "\">";
  return catImageURL;
}

window.onload = app;
