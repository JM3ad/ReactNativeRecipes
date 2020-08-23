import {RecipeViewModel} from 'components/recipe';
import KentishFriedTofu from 'data/recipes/kentish-fried-tofu';
import SmokeySpanishBeanStew from 'data/recipes/smokey-bean-stew';
import PastaAllaNorma from 'data/recipes/pasta-alla-norma';
import DalMakhani from 'data/recipes/dal-makhani';
import VeggieChilli from 'data/recipes/veggie-chilli'

export const getRecipes: () => RecipeViewModel[] = () => {
  return [
    KentishFriedTofu,
    SmokeySpanishBeanStew,
    PastaAllaNorma,
    DalMakhani,
    VeggieChilli,
  ];
};