import React from 'react';
import { StyleSheet, View } from 'react-native';
import FirstPage from 'first-page';

const App = () => (
    <View style={styles.container}>
      <FirstPage/>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
