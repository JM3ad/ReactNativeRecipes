import React from 'react';
import HomePage from 'pages/home-page';
import AllRecipes from 'pages/all-recipes-page';
import RecipePage from 'pages/recipe-page';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {RecipeViewModel} from 'components/recipe';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Recipes: undefined;
  Recipe: {recipe: RecipeViewModel};
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type RecipesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Recipes'>;
export type RecipeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Recipe'>;
export type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

const Stack = createStackNavigator<RootStackParamList>();

const Router = () =>
  <Stack.Navigator screenOptions={navigationStyles}>
    <Stack.Screen
      name='Home'
      component={HomePage}
    />
    <Stack.Screen
      name='Recipes'
      component={AllRecipes}
    />
    <Stack.Screen
      name='Recipe'
      component={RecipePage}
    />
  </Stack.Navigator>;

const navigationStyles = {
  headerStyle: {
    backgroundColor: '#99EEEE'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Merriweather',
  }
};

export default Router;