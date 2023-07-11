import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import CallActionBox from '../../components/CallActionBox';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.cameraPreview}>

            <Text style={styles.name}>Alex</Text>
            <Text style={styles.phoneNumber}>ringing +31 343 3232 5656</Text>

        </View>
        <CallActionBox />
    </View>
  );
};

const styles = StyleSheet.create({
    cameraPreview: {
        alignItems: 'center',
        backgroundColor: '#7b4e80',
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 50,
    },
    page: {
        backgroundColor: '#7b4e80',
        height: '100%',
    },
    phoneNumber: {
        color: 'white',
        fontSize: 20,
    },
});

export default CallingScreen;