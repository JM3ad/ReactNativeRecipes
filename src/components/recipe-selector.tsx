import React from 'react';
import {View} from 'react-native';
import {RecipeViewModel} from 'components/recipe';
import AppButton from 'components/basic/app-button';

const RecipeSelector: React.FC<RecipeSelectorProps> = ({recipe, navigation}) => {
  const navigateToRecipe = () => {
    navigation.navigate('Recipe', {recipe});
  };

  return <View>
    <AppButton onPress={navigateToRecipe}>{recipe.name}</AppButton>
  </View>;
};

interface RecipeSelectorProps {
  recipe: RecipeViewModel;
  navigation: any;
}

export default RecipeSelector;