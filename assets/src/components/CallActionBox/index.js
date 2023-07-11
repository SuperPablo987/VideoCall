import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const CallActionBox = () => {
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicrphoneOn, setIsMicrophoneOn] = useState(true);

    const onReverseCamera = () => {
        console.warn('onReverseCamera');
    };

    const onToggleCamera = () => {
        setIsCameraOn(currentValue => !currentValue);
    };

    const onToggleMicrophone = () => {
        setIsMicrophoneOn(currentValue => !currentValue);
    };

    const onHangup = () => {
        console.warn('onHangup');
    };

  return (
    <View style={styles.buttonsContainer}>
        <Pressable onPress={onReverseCamera} style={styles.iconButton}>
            <Ionicons name='camera-reverse' size={30} color="white" />
        </Pressable>

        <Pressable onPress={onToggleCamera} style={styles.iconButton}>
            <Feather 
                name={isCameraOn ? 'camera-off' : 'camera'} 
                size={30} 
                color="white" />
        </Pressable>

        <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
            <Feather 
                name={isMicrphoneOn ? 'mic-off': 'mic'} 
                size={30} 
                color="white" />
        </Pressable>

        <Pressable onPress={onHangup} style={styles.endCallButton}>
            <MaterialIcons name='call-end' size={30} color="white" />
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        backgroundColor: '#333333',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 40,
        marginTop: 'auto',
    },
    endCallButton: {
        backgroundColor: "red",
        borderRadius: 50,
        padding: 15,
    },
    iconButton: {
        backgroundColor: '#4a4a4a',
        borderRadius: 50,
        padding: 15,
    },
});

export default CallActionBox