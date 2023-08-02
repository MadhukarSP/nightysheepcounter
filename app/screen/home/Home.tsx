import React from 'react';
import {StyleSheet, View} from 'react-native';
import Sheep from '../../component/sheep/Sheep';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Sheep />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default Home;
