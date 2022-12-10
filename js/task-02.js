const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findUl = document.querySelector("#ingredients");

const createIngredientsList = ingredients.forEach((ingredient) =>{
  let ingredientList = document.createElement("li");
  ingredientList.textContent = ingredient;
  ingredientList.classList.add("item");
  findUl.append(ingredientList);
}
)