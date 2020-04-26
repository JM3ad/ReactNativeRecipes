import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getRecipes} from 'data/recipes';
import RecipeSelector from 'components/recipe-selector';
import {RecipesScreenNavigationProp} from 'router';

const AllRecipes = ({navigation}: Props) => {
  const recipes = getRecipes();

  return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Our Recipes</Text>
          {recipes.map((recipe, index) =>
              <RecipeSelector
                  key={index}
                  recipe={recipe}
                  navigation={navigation}
              />
          )}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  navigation: RecipesScreenNavigationProp;
};

export default AllRecipes;