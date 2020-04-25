import {RecipeModel} from 'components/recipe';

export const getRecipes: () => RecipeModel[] = () => {
  return [
    {
      name: 'Aubergine',
      ingredients: 'Aubergine',
      instructions: 'Aubergine',
    },
  ];
};