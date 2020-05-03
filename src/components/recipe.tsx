import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import AppText from 'components/basic/app-text';
import AppHeader from 'components/basic/app-header';
import AppSubheader from 'components/basic/app-subheader';

const Recipe: React.FC<RecipeProps> = ({recipe}) => {
  if (!recipe) {
    return recipe;
  }

  return <View>
    <AppHeader>{recipe.name}</AppHeader>
    <AppSubheader>Ingredients:</AppSubheader>
    <FlatList
        data={recipe.ingredients}
        renderItem={({item}) =>
            <AppText style={styles.listItem}>
              * {item}
            </AppText>
        }
        keyExtractor={(ingredient, index) => String(index)}
    />
    <AppSubheader>Instructions:</AppSubheader>
    <FlatList
        data={recipe.instructions}
        renderItem={({item}) =>
            <AppText style={styles.listItem}>
              * {item}
            </AppText>
        }
        keyExtractor={(instruction, index) => String(index)}
    />
  </View>;
};

const styles = StyleSheet.create({
  listItem: {
    margin: 3,
  }
});

export interface RecipeViewModel {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeProps {
  recipe: RecipeViewModel;
}

export default Recipe;