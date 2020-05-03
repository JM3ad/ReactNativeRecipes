import React from 'react';
import Recipe from 'components/recipe';
import {RecipeScreenNavigationProp, RecipeScreenRouteProp} from 'router';
import PageLayout from 'layout/page-layout';

const RecipePage = ({route}: Props) => {
  const recipe = route.params.recipe;

  return (
    <PageLayout>
      {recipe && <Recipe recipe={recipe}/>}
    </PageLayout>
  );
};

type Props = {
  route: RecipeScreenRouteProp;
  navigation: RecipeScreenNavigationProp;
};

export default RecipePage;