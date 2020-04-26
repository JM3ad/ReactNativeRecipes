import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Link} from 'react-router-native';

const PageNotFound = () => {
  return (
      <ScrollView>
        <Text style={styles.header}>I'm sorry, you seem to be lost!</Text>
        <Link to={'/'}>
            <Text>Return to home</Text>
        </Link>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default PageNotFound;