import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CallScreen from '../screens/CallScreen';
import CallingScreen from '../screens/CallingScreen';
import ContactsScreen from '../screens/ContactsScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Contacts' component={ContactsScreen} />

        <Stack.Group screenOptions={{ headerShown: false }}>    
          <Stack.Screen name='Call' component={CallScreen} />
          <Stack.Screen name='Calling' component={CallingScreen} />
          <Stack.Screen name='IncomingCall' component={IncomingCallScreen} />
        </Stack.Group>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;