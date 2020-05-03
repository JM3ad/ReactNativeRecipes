import {RecipeViewModel} from 'components/recipe';
import KentishFriedTofu from 'data/recipes/kentish-fried-tofu';
import SmokeySpanishBeanStew from 'data/recipes/smokey-bean-stew';
import PastaAllaNorma from 'data/recipes/pasta-alla-norma';

export const getRecipes: () => RecipeViewModel[] = () => {
  return [
    KentishFriedTofu,
    SmokeySpanishBeanStew,
    PastaAllaNorma,
  ];
};