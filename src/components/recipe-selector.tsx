import React from 'react';
import {Button, View} from 'react-native';
import {RecipeViewModel} from 'components/recipe';

const RecipeSelector: React.FC<RecipeSelectorProps> = ({recipe, navigation}) => {
  return <View>
    <Button title={recipe.name} onPress={() => {
      navigation.navigate('Recipe', {recipe});
    }}/>
  </View>;
};

interface RecipeSelectorProps {
  recipe: RecipeViewModel;
  navigation: any;
}

export default RecipeSelector;