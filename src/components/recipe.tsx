import React from 'react';
import {Text, View} from 'react-native';

const Recipe: React.FC<RecipeProps> = ({recipe}) => (
  <View>
    <Text>{recipe.name}</Text>
    <Text>{recipe.ingredients}</Text>
    <Text>{recipe.instructions}</Text>
  </View>
);

export interface RecipeModel {
  name: string;
  ingredients: string;
  instructions: string;
}

interface RecipeProps {
  recipe: RecipeModel;
}

export default Recipe;