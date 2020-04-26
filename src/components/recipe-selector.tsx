import React from 'react';
import {Button, Text, View} from 'react-native';
import Recipe from 'components/recipe';

const RecipeSelector: React.FC<RecipeSelectorProps> = ({recipe, isSelected, select}) => {
  return <View>
    {isSelected ? <Recipe recipe={recipe}></Recipe> : <Button onPress={select} title={recipe.name} />}
  </View>;
};

export interface RecipeViewModel {
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeSelectorProps {
  recipe: RecipeViewModel;
  isSelected: boolean;
  select: () => void;
}

export default RecipeSelector;