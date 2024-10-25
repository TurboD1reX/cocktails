document.getElementById('search-input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardName = card.getAttribute('data-name').toLowerCase();
        if (cardName.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

const ingredients = document.querySelectorAll('.ingredients');
const ingredient = document.querySelectorAll('.ingredient');
const cocktails = document.querySelectorAll('.cocktail');

let selectedIngredients = new Set();


function filterCocktails() {
    cocktails.forEach(cocktail => {
        const cocktailIngredients = [...cocktail.querySelectorAll('.ingredient')].map(ing => ing.getAttribute('data-name'));
        const hasAllSelectedIngredients = [...selectedIngredients].every(ing => cocktailIngredients.includes(ing));
        
        cocktail.style.display = hasAllSelectedIngredients ? 'block' : 'none';
    });
}


ingredients.forEach(ingredient => {
    ingredient.addEventListener('click', () => {
        const ingredientName = ingredient.getAttribute('data-name');


        if (selectedIngredients.has(ingredientName)) {
            selectedIngredients.delete(ingredientName);
            ingredient.classList.remove('selected');
        } else {
            selectedIngredients.add(ingredientName);
            ingredient.classList.add('selected');
        }

        filterCocktails();
    });
});