import React from 'react';
import {Button, Text, View} from 'react-native';

const Recipe: React.FC<RecipeProps> = ({recipe}) => (
    <View>
      <Button title={recipe.name} onPress={() => {}} />
      <Text>Ingredients:</Text>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <Text>
                {ingredient}
              </Text>
            </li>
        ))}
      </ul>
      <Text>Instructions:</Text>
      <ul>
        {recipe.instructions.map((instruction, index) => (
            <li key={index}>
              <Text>
                {instruction}
              </Text>
            </li>
        ))}
      </ul>
    </View>
);

export interface RecipeViewModel {
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeProps {
  recipe: RecipeViewModel;
}

export default Recipe;