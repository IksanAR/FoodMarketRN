import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SignIn, Splash, SignUp, SignUpAddress} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
