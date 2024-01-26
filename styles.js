'use strict';
import { StyleSheet } from 'react-native';
import {
    useFonts, Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';


export const fonts = () => {

    let [fontsLoaded, fontError] = useFonts({
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
}

module.exports = StyleSheet.create({

    mainHeading: {
        color: '#111',
        fontSize: 20,
        lineHeight: 33,
        marginBottom: 8,
        // fontFamily: 'Inter_700Bold',
        letterSpacing: 0.4
    },
    commonParaText: {
        fontSize: 12,
        // fontFamily:'Inter_400Regular',
        color: '#757a82',
        lineHeight: 20,
        letterSpacing: 0.1

    },
    defaultButton: {
        borderRadius: 8,
        fontWeight: 600,
    }
});