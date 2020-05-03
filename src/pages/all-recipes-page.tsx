import React from 'react';
import {getRecipes} from 'data/recipes';
import RecipeSelector from 'components/recipe-selector';
import {RecipesScreenNavigationProp} from 'router';
import AppHeader from 'components/basic/app-header';
import PageLayout from 'layout/page-layout';

const AllRecipes = ({navigation}: Props) => {
  const recipes = getRecipes();

  return (
    <PageLayout>
      <AppHeader>The Recipes</AppHeader>
      {recipes.map((recipe, index) =>
        <RecipeSelector
            key={index}
            recipe={recipe}
          navigation={navigation}
        />
      )}
    </PageLayout>
  );
};

type Props = {
  navigation: RecipesScreenNavigationProp;
};

export default AllRecipes;