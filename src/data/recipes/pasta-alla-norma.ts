import {RecipeViewModel} from 'components/recipe';

const recipe: RecipeViewModel = {
  id: 'pan',
  name: 'Pasta alla Norma',
  ingredients: [
    '3 aubergines',
    '120ml olive oil',
    '5 garlic cloves',
    '1 mild chilli',
    '2x 400g tin plum tomatoes',
    '2 tsp oregano',
    '300g spaghetti',
    '20g basil leaves',
  ],
  instructions: [
    'Preheat oven to gas 6',
    'Cut aubergine into thin slices, and place in bowl with 75ml oil & a generous grind of salt and pepper. Mix well,' +
    'then spread on a roasting tray & roast for ~35 minutes until golden brown',
    'Put 2 tbsp oil into pan at medium-high heat & fry garlic & chilli for 1-2 minutes',
    'Add tomatoes, oregano and some salt and pepper, then reduce heat to medium-low and simmer for 10 mins until sauce is thick',
    'Stir in the aubergine',
    'Cook the spaghetti, mix with the basil and some pasta water if too thick, and serve.'
  ],
};

export default recipe;