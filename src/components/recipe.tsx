import React from 'react';
import {Text, View} from 'react-native';

const Recipe: React.FC<RecipeProps> = ({recipe}) => (
  <View>
    <Text>Recipe for: {recipe.name}</Text>
    <Text>Ingredients: {recipe.ingredients}</Text>
    <Text>Instructions: Cook the {recipe.instructions}</Text>
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