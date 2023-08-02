import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';

const HEADER = 'Nighty Sheep Counter';
const AUTHOR = 'Madhukar';

const StartUp = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen', {});
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/nightySheeps.jpeg')}
        style={styles.imageBackground}>
        <View style={styles.titleContainer}>
          <Text style={styles.header}>{HEADER}</Text>
          <Text style={styles.author}>by {AUTHOR}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 250,
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 100,
    scaleX: 2,
    backgroundColor: '#155572',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Courier-Oblique',
  },
  author: {
    marginTop: 12,
    color: '#fefdda',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Courier-Oblique',
  },
});

export default StartUp;
