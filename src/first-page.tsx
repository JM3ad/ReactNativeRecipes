import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Recipe from 'components/recipe';
import {getRecipes} from 'data/recipes';
import RecipeSelector from 'components/recipe-selector';

const FirstPage = () => {
  const recipes = getRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState(0);

  return (
      <ScrollView>
        <Text style={styles.header}>Our Recipes</Text>
        {recipes.map((recipe, index) =>
            <RecipeSelector
                key={index}
                recipe={recipe}
                isSelected={selectedRecipe === index}
                select={() => setSelectedRecipe(index)}
            />
        )}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default FirstPage;