import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// import Navigation from './assets/src/navigation';
// for troubleshooting
import CallScreen from './assets/src/screens/CallScreen';
import ContactsScreen from './assets/src/screens/ContactsScreen';
import IncomingCallScreen from './assets/src/screens/IncomingCallScreen';
import CallingScreen from './assets/src/screens/CallingScreen';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      {/* <Navigation /> */}

        
      {/* <ContactsScreen /> */}
      {/* <IncomingCallScreen /> */}
      {/* <CallScreen /> */}
      <CallingScreen />

    </>
  );
}

