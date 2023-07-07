import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.cameraPreview}>

            <Text style={styles.name}>Alex</Text>
            <Text style={styles.phoneNumber}>ringing +31 343 3232 5656</Text>

            <View style={{flex: 1}}/>
            <View style={styles.buttonsContainer}>
                <Text> Icons</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        backgroundColor: '#333333',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        width: '100%',
    },
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
        height: '100%',
    },
    phoneNumber: {
        color: 'white',
        fontSize: 20,
    },
});

export default CallingScreen;