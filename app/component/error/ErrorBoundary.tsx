import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  fallback?: ReactNode;
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  state = {hasError: false};

  componentDidCatch() {
    this.setState({hasError: true});
  }

  resetError = () => {
    this.setState({hasError: false});
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text>There was some Error</Text>
          <TouchableOpacity style={styles.button} onPress={this.resetError}>
            <Text style={styles.buttonText}>Reload</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  errorContainer: {
    paddingTop: 10,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minHeight: 44,
    marginTop: 10,
    marginHorizontal: 8,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
