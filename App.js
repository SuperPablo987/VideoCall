import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import ContactsScreen from './assets/src/screens/ContactsScreen';
import CallingScreen from './assets/src/screens/CallingScreen';


export default function App() {
  return (
    <SafeAreaView >
      <StatusBar style="auto" />
        <CallingScreen />
    </SafeAreaView>
  );
}

