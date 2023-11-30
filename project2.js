// Mock data for initial recipes
const recipes = [
  {
    title: 'Delicious Pasta',
    description: 'A classic pasta dish that everyone loves.',
    ingredients: 'Pasta, Tomatoes, Olive Oil, Garlic, Basil',
    instructions: 'Boil pasta. Saute garlic in olive oil. Add chopped tomatoes and basil. Mix with pasta.',
  },
  // Add more recipes as needed
];

// Function to display recipes on the page
function displayRecipes() {
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = '';

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
    recipeList.appendChild(recipeCard);
  });
}

// Function to add a new recipe
function addRecipe() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;

  if (title && description && ingredients && instructions) {
    const newRecipe = { title, description, ingredients, instructions };
    recipes.push(newRecipe);
    displayRecipes();
    clearForm();
  } else {
    alert('Please fill in all fields.');
  }
}

// Function to clear the form after adding a recipe
function clearForm() {
  document.getElementById('recipe-form').reset();
}

// Display initial recipes when the page loads
window.onload = displayRecipes;


