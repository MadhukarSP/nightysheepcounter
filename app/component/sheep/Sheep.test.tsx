import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Sheep from './Sheep';
import useSheepJump from './Sheep.hook';

// Declare a shared instance of the mocked hook
const mockedHookInstance = {
  sheepCounter: 10,
  displayRandomSheep: true,
  displaySleepButton: true,
  gotoSleep: false,
  handleImageClick: jest.fn(),
  handleSleepButtonClick: jest.fn(),
};

// Mock useSheepJump hook
jest.mock('./Sheep.hook', () => {
  return () => mockedHookInstance; // Return the shared instance
});

describe('Sheep', () => {
  test('should render the Sheep component with correct sheepCounter value', () => {
    const {getByText} = render(<Sheep />);
    const sheepCounterText = getByText('10'); // Update this with the expected value of sheepCounter
    expect(sheepCounterText).toBeTruthy();
  });

  test('should display the random sheep when displayRandomSheep is true', () => {
    const {getByTestId} = render(<Sheep />);
    const randomSheep = getByTestId('random-sheep');
    expect(randomSheep).toBeTruthy();
  });

  test('should display the sleep button when displaySleepButton is true', () => {
    const {getByTestId} = render(<Sheep />);
    const sleepButton = getByTestId('sleep-button');
    expect(sleepButton).toBeTruthy();
  });

  test('should call handleImageClick when the TouchableOpacity is pressed', () => {
    const {getByTestId} = render(<Sheep />);
    const touchableOpacity = getByTestId('touchable-opacity');
    fireEvent.press(touchableOpacity);

    expect(mockedHookInstance.handleImageClick).toHaveBeenCalled();
  });

  test('should call handleSleepButtonClick when the Sleep button is pressed', () => {
    const {getByTestId} = render(<Sheep />);
    const sleepButton = getByTestId('sleep-button');
    fireEvent.press(sleepButton);
    expect(useSheepJump().handleSleepButtonClick).toHaveBeenCalled();
  });
});
