import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

import Icon from 'react-native-vector-icons/FontAwesome'


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.barConfig}>
                <View style={styles.barUser}>
                    <Icon name='user-circle' color="#8ac126" style={styles.icon} />
                    <Text style={styles.textTitle}>Olá, Bianca</Text></View>
                <Icon name='bell' color="#8ac126" style={styles.icon} />
            </View>
            <Animatable.View animation='fadeInDownBig' style={styles.imageContent}>
                <Image source={require('../assets/image.jpg')} style={styles.image} />
                <Animatable.View animation='fadeInUp' delay={500} style={styles.textContent}>
                    <Text style={styles.text}>Seja</Text>
                    <Text style={styles.text}>Bem-Vindo!</Text>
                    <Text style={styles.textBottom}>Como podemos te ajudar hoje?</Text>
                </Animatable.View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 28,
    },
    barConfig: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 17
    },
    barUser: {
        flexDirection: 'row',
        gap: 8
    },
    textTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: "#8ac126"
    },
    icon: {
        fontSize: 24
    },
    imageContent: {
        flex: 0.9,
        backgroundColor: '#e1efc8',
        borderTopRightRadius: 50,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,

    },
    image: {
        width: '100%',
        height: '40%',
        resizeMode: 'contain',
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    textContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 45,
        color: '#67980D',
        fontWeight: '500'
    },
    textBottom: {
        fontSize: 16,
        color: '#67980D',
        fontWeight: '400'
    }
})