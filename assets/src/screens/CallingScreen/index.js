import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/core';

import CallActionBox from '../../components/CallActionBox';

const CallingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const user = route?.params?.user;

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.page}>
            <Pressable onPress={goBack} style={styles.backButton}>
                <Ionicons name='caret-back' color="white" size={30} />
            </Pressable>
            <View style={styles.cameraPreview}>

                <Text style={styles.name}>{user?.user_display_name}</Text>
                <Text style={styles.phoneNumber}>ringing +31 343 3232 5656</Text>

            </View>
            <CallActionBox />
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        left: 10,
        position: "absolute",
        top: 50,
        zIndex: 10,
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
        backgroundColor: '#7b4e80',
        height: '100%',
    },
    phoneNumber: {
        color: 'white',
        fontSize: 20,
    },
});

export default CallingScreen;