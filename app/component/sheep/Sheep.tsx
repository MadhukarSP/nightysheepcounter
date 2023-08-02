import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import useSheepJump from './Sheep.hook';

const Sheep = () => {
  const {
    sheepCounter,
    displayRandomSheep,
    displaySleepButton,
    gotoSleep,
    handleImageClick,
    handleSleepButtonClick,
  } = useSheepJump();

  return (
    <TouchableOpacity
      onPress={handleImageClick}
      activeOpacity={1}
      testID="touchable-opacity">
      <ImageBackground
        source={
          gotoSleep
            ? require('../../assets/night.gif')
            : require('../../assets/sheepSlowJump.gif')
        }
        style={styles.backgroundImage}
        resizeMode="stretch">
        <View style={styles.sheepCountContainer}>
          <View style={styles.sheepCount}>
            {Boolean(sheepCounter) && (
              <Text style={styles.sheepCountText}>{sheepCounter}</Text>
            )}
          </View>
        </View>

        {displayRandomSheep && (
          <View style={styles.runningSheep}>
            <Image
              source={require('../../assets/sheepJump.gif')}
              style={styles.runningSheepImage}
              resizeMode="stretch"
              testID="random-sheep"
            />
          </View>
        )}

        {displaySleepButton && (
          <View style={styles.sleepButtonContainer}>
            <TouchableOpacity
              onPress={handleSleepButtonClick}
              style={styles.sleepButton}
              testID="sleep-button">
              <Text style={styles.sleepButtonText}>
                {gotoSleep ? 'Resume Counting' : 'Sleep'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  sheepCountContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sheepCount: {
    marginBottom: 24,
    marginRight: 24,
    textAlignVertical: 'bottom',
  },
  sheepCountText: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: '#fefffa',
    fontSize: 60,
    fontWeight: '500',
    fontFamily: 'Courier-Oblique',
  },
  runningSheep: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  runningSheepImage: {
    height: 75,
    width: 75,
    borderRadius: 100,
  },
  sleepButtonContainer: {
    position: 'absolute',
    bottom: 32,
    left: 12,
  },
  sleepButton: {
    backgroundColor: '#155572',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  sleepButtonText: {
    color: 'yellow',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    fontFamily: 'Courier-Oblique',
  },
});

export default Sheep;
