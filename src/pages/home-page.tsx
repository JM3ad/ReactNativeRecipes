import React from 'react';
import {HomeScreenNavigationProp} from 'router';
import AppButton from 'components/basic/app-button';
import AppHeader from 'components/basic/app-header';
import PageLayout from 'layout/page-layout';

const HomePage = ({navigation}: Props) => (
  <PageLayout>
    <AppHeader>Our Recipes</AppHeader>
    <AppButton onPress={() => navigation.navigate('Recipes')}>See All</AppButton>
  </PageLayout>
);

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default HomePage;