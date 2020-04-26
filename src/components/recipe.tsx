import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';

const Recipe: React.FC<RecipeProps> = ({recipe}) => (
    <View>
      <Button title={recipe.name} onPress={() => {
      }}/>
      <Text>Ingredients:</Text>
      <FlatList
          data={recipe.ingredients}
          renderItem={({item}) =>
              <Text>
                * {item}
              </Text>
          }
          keyExtractor={(ingredient, index) => String(index) }
      />
      <Text>Instructions:</Text>
      <FlatList
          data={recipe.instructions}
          renderItem={({item}) =>
              <Text>
                * {item}
              </Text>
          }
          keyExtractor={(instruction, index) => String(index) }
      />
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