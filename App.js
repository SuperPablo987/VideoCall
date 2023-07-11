import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Navigation from './assets/src/navigation';


const App = () => {
  return (
    <>
      <StatusBar style="auto" />

      <Navigation />
    </>
  );
};

export default App;

