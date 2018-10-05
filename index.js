function init() {
	handlebarsSetup()
	initForm()
}
document.addEventListener("DOMContentLoaded", function (event) {
	init()
})

function handlebarsSetup() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
    function renderMain() {
      var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
      var html = template(recipe);
    } 
}

function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
  
  
  
}



function createRecipe() {

    var recipe = 
    {
      description: document.getElementById("description").value,
      ingredients: [
        {name: document.getElementsByName("ingredients")[0].value},
        {name: document.getElementsByName("ingredients")[1].value},
        {name: document.getElementsByName("ingredients")[2].value},
        {name: document.getElementsByName("ingredients")[3].value},
        {name: document.getElementsByName("ingredients")[4].value},
      ]
      
    }
  
      var template = Handlebars.compile(document.getElementById("recipe-details-partial").innerHTML);
      var html = template(recipe);
      
      document.getElementsByTagName("main")[0].innerHTML += html
}

 


  
    




function displayEditForm() {
  
  
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}
