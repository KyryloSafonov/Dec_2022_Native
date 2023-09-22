/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ReactNode} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens/Home';
import {CurrentUser} from './screens/CurrentUser';
import {Users} from './screens/Users';
import {Routes} from './routes';

const Stack = createNativeStackNavigator();

const App = (): ReactNode => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
        initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Users} component={Users} />
        <Stack.Screen name={Routes.CurrentUser} component={CurrentUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
