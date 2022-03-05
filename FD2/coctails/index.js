class HashStorage {
   constructor() {
      this.storage = {};
   };
   addValue = function(key, value) {
      this.storage[key] = value;
   };
   getValue = function(key) {
      if (key in this.storage) {
         return this.storage[key];
      } else {
         return undefined;
      };
   };
   deleteValue = function(key) {
      if (this.storage[key]) {
         delete this.storage[key];
         return true;
      } else {
         return false;
      };
   };
   getKeys = function() {
      let keys = [];
      for(let key in this.storage) {
         keys.push(key);
      };
      return keys;
   };
};
const coctailsStorage = new HashStorage();

coctailsStorage.addValue('latte', {
   cocktailName: 'Latte',
   alcohol: 'no',
   ingredients: [ {name: 'espresso', quantity: 50, measure: 'ml',}, {name: 'milk', quantity: 150, measure: 'ml',}],
   recipe: 'Ценители утверждают, что самый вкусный латте получится из смеси с содержанием не менее 15% робусты. Из кофе тонкого помола приготовить эспрессо (30-50 мл). Молоко (150 мл, жирность не менее 3%) нагреть до температуры 50-60 градусов и вспенивать капучинатором в течение 30 секунд. В качестве посуды для латте используется большая кружка (240 мл), сначала в нее наливается эспрессо, затем молоко. Довольно часто, чтобы разнообразить вкус напитка, в латте добавляются сиропы (ванильный, карамельный, шоколадный, фруктовые) или мёд.',
});
coctailsStorage.addValue('mokko', {
   cocktailName: 'Mokko',
   alcohol: 'no',
   ingredients: [ {name: 'coffee', quantity: 50, measure: 'ml',}, {name: 'sugar', quantity: 10, measure: 'g',}, {name: 'milk', quantity: 50, measure: 'ml',}, {name: 'bitter chocolate', quantity: 60, measure: 'g',},  {name: 'whipped cream', quantity: 50, measure: 'ml',},],
   recipe: 'Сварите черный кофе по любому из ваших любимых рецептов. Можно воспользоваться кофемашиной и сделать экспрессо. При необходимости приготовленный напиток процедите.В горячий кофе добавьте сахар по вкусу, размешайте.На водяной бане или на медленном огне растопите 50 г шоколада. Можно это сделать и с помощью микроволновки. Остальной шоколад охладите и натрите.Подогрейте молоко, не доводя его до кипения, чтобы не образовалась пенка.В айриш-бокал влейте растопленный шоколад, затем молоко и, наконец, кофе.Украсьте взбитыми сливками. Посыпьте тертым шоколадом.',
});
//console.log(coctailsStorage.getValue());

//addValue function
let addValueBtn = document.querySelector('.addValueBtn'); 
addValueBtn.onclick = function() {
   let cocktailName;
   while(cocktailName === '' || cocktailName == null || cocktailName.length == 1) {
      cocktailName = prompt('Enter name coctail', 'coffee');
   };
   let alcohol = confirm('alcoholic coffee?', 'no');
   if(alcohol) {
      alcohol = 'yes';
   } else {
      alcohol = 'no';
   };
   let ingredients = [];
   let ingredient = {};
   do {
      ingredient = {
         name: (prompt('Enter ingredient ', 'coffee')),
         quantity: (prompt('Enter amount', '50')),
         measure: (prompt('Enter measurement value', 'ml'))
      }
      ingredients.push(ingredient);
   } while (confirm('More ingredients?'));
      let recipe = prompt('Enter the cooking recipe', '...');
      let value = {
         cocktailName: cocktailName,
         alcohol: alcohol,
         ingredients: ingredients,
         recipe: recipe,
      };
      coctailsStorage.addValue(cocktailName, value);
}
//return recipe
let recipeValueBtn = document.querySelector('.recipeValueBtn');
let cocktailRecipe = document.querySelector('.cocktail-recipe');
recipeValueBtn.onclick = function() {
   let cocktailName;
   while(cocktailName === '' || cocktailName == null || cocktailName.length == 1) {
      cocktailName = prompt('Enter name coffee', 'coffee');
   };
   let recipe = coctailsStorage.getValue(cocktailName);
      if(recipe) {
         let ingredientsList = '';
         for(let i = 0; i < recipe.ingredients.length; i++) {
            ingredientsList = ingredientsList + `<li>${recipe.ingredients[i].name} ${recipe.ingredients[i].quantity} ${recipe.ingredients[i].measure}</li>`
         };
         cocktailRecipe.innerHTML = (`<h2> Coffee ${recipe.cocktailName} (alcohol: ${recipe.alcohol})</h2>
            <h3>Required Ingredients:</h3>
            <ul>${ingredientsList}</ul>
            <h3>Recipe:</h3>
            <h4>${recipe.recipe}</h4>
         `);
      } else {
         cocktailRecipe.innerHTML = (`<h2>Coffee not listed</h2>`);
      };
      cocktailRecipe.style.display = 'block';
      cocktailsList.style.display = 'none';
      deleteMessage.style.display = 'none';
};
//delete recipe
let deleteValueBtn = document.querySelector('.deleteValueBtn');
let deleteMessage = document.querySelector('.delete-message');
deleteValueBtn.onclick = function() {
   let cocktailName; 
   while(cocktailName === '' || cocktailName == null || cocktailName.length == 1) {
      cocktailName = prompt('Enter name coffee', 'coffee');
   };
   let cocktailDelete = coctailsStorage.deleteValue(cocktailName);
   deleteMessage.style.display = 'block';
   if(cocktailDelete) {
      deleteMessage.innerHTML = `<h2>Coctail delete</h2>`;
   } else {
      deleteMessage.innerHTML = `<h2>Coctail not listed</h2>`;
   };
   cocktailRecipe.style.display = 'none';
};
//list recipe
let coctailsAllBtn = document.querySelector('.coctailsAllBtn');
let cocktailsList  = document.querySelector('.cocktails-list');
coctailsAllBtn.onclick = function() {
   let listAll = coctailsStorage.getKeys();
   if(listAll.length) {
      let showListAll = '';
      for(let i = 0; i <listAll.length; i++) {
         showListAll = showListAll + `<li> ${listAll[i]} </li>`;
      };
      cocktailsList.innerHTML = `<h2>List all coffee</h2> <ul>${showListAll}</ul>`;
   } else {
      cocktailsList.innerHTML = `<h2>Coffee list is empty</h2>`
   };
   cocktailsList.style.display = 'block';
   cocktailRecipe.style.display = 'none';
   deleteMessage.style.display = 'none';
};