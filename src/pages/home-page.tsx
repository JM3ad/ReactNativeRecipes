import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HomeScreenNavigationProp} from 'router';

const HomePage = ({navigation}: Props) => {
  return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Our Recipes</Text>
          <Button onPress={() => navigation.navigate('Recipes')} title={'See All'}/>
        </ScrollView>
      </View>
  );
};

type Props = {
  navigation: HomeScreenNavigationProp;
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

export default HomePage;