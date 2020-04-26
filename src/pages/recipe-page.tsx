import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Recipe from 'components/recipe';
import {RecipeScreenNavigationProp, RecipeScreenRouteProp} from 'router';

const RecipePage = ({route}: Props) => {
  const recipe = route.params.recipe;

  return (
      <View style={styles.container}>
        <ScrollView>
          {recipe && <Recipe recipe={recipe}/>}
        </ScrollView>
      </View>
  );
};

type Props = {
  route: RecipeScreenRouteProp;
  navigation: RecipeScreenNavigationProp;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecipePage;