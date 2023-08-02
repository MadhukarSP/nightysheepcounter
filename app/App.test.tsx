import React from 'react';
import {render} from '@testing-library/react-native';
import App from './App';

// Mock the navigation functions
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

// Mock the screen components
jest.mock('./screen/home/Home', () => ({
  __esModule: true,
  default: () => <mock-home-screen />,
}));

jest.mock('./screen/startup/StartUp', () => ({
  __esModule: true,
  default: () => <mock-startup-screen testID="start-up-screen" />,
}));

// Mock the ErrorBoundary component
jest.mock('./component/error/ErrorBoundary', () => ({
  __esModule: true,
  default: ({children}: {children: React.ReactNode}) => (
    <mock-error-boundary>{children}</mock-error-boundary>
  ),
}));

describe('App', () => {
  it('renders the StartUpScreen by default', () => {
    const {getByTestId} = render(<App />);
    const startUpScreen = getByTestId('start-up-screen');
    expect(startUpScreen).toBeTruthy();
  });
});
