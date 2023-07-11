import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

import bg from '../../../images/ios_bg.png';

const IncomingCallScreen = () => {

    const onDecline = () => {
        console.warn('on Decline');
    }

    const onAccept = () => {
        console.warn('on Accept');
    }

  return (
        <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>  
            <Text style={styles.name}>Alex</Text>
            <Text style={styles.phoneNumber}>WhatsApp Video...</Text> 

            <View style={[styles.row, {marginTop: 'auto'}]}>
                <View style={styles.iconContainer}>
                    <Ionicons name='alarm' color="white" size={30}/>
                    <Text style={styles.iconText}>Remind Me</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name="message" color="white" size={30}/>
                    <Text style={styles.iconText}>Message</Text>
                </View>
            </View>
            <View style={styles.row}>
                {/* Decline Button */}
                <Pressable onPress={onDecline} style={styles.iconContainer}>
                    <View style={styles.iconButtonContainer}>
                        <Feather name='x' color="white" size={50}/>
                    </View>
                        <Text style={styles.iconText}>Decline</Text>
                </Pressable>

                {/* Accept Button */}
                <Pressable onPress={onAccept} style={styles.iconContainer}>
                    <View style={[styles.iconButtonContainer, {backgroundColor: 'green'}]}>
                        <Feather name='check' color="white" size={50}/>
                    </View>
                        <Text style={styles.iconText}>Accept</Text>
                </Pressable>
            </View>
        </ImageBackground>  

  );
};

const styles = StyleSheet.create({
    bg: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
        paddingBottom: 50,
    },
    iconButtonContainer: {
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 15,
        margin: 10,
    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    iconText: {
        color: 'white',
        marginTop: 10,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 100,
    },
    phoneNumber: {
        color: 'white',
        fontSize: 20,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
});

export default IncomingCallScreen