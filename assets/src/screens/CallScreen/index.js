import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import CallActionBox from '../../components/CallActionBox'

const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.cameraPreview}/>

        <CallActionBox />
    </View>
  );
};

const styles = StyleSheet.create({
    cameraPreview: {
        backgroundColor: '#ffff6e',
        borderRadius: 10,
        height: 150,
        position: 'absolute',
        right: 10,
        top: 100,
        width: 100,
    },
    page: {
        backgroundColor: '#7b4e80',
        height: '100%',
    },
});

export default CallingScreen;