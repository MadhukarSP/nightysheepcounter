import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screen/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartUpScreen from './screen/startup/StartUp';
import ErrorBoundary from './component/error/ErrorBoundary';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartUpScreen">
          <Stack.Screen
            name="StartUpScreen"
            component={StartUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
