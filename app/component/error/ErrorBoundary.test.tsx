import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorBoundary from './ErrorBoundary';
import {Text} from 'react-native';

console.error = jest.fn(); // Mock console.error to suppress warning message

describe('ErrorBoundary', () => {
  const ErrorComponent = () => {
    throw new Error('Test Error');
  };
  const ChildComponent = () => {
    return <Text testID="child-text">Child Component</Text>;
  };

  it('should render the child component when no error occurs', () => {
    const {getByTestId} = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    const childText = getByTestId('child-text');
    expect(childText).toBeTruthy();
  });

  it('should display the error message and reload button when an error occurs', () => {
    const {getByText} = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    const errorMessage = getByText('There was some Error');
    const reloadButton = getByText('Reload');

    expect(errorMessage).toBeTruthy();
    expect(reloadButton).toBeTruthy();
  });
});
