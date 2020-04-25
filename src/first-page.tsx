import React from 'react';
import {ScrollView, Text} from 'react-native';
import Recipe from 'components/recipe';
import {getRecipes} from 'data/recipes';

const FirstPage = () => {

  return (
      <ScrollView>
        <Text>Header</Text>
        <Recipe recipe={getRecipes()[0]}></Recipe>
      </ScrollView>
  );
};

export default FirstPage;