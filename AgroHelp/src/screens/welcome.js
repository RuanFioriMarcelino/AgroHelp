import {
    View,
    Text,
    StyleSheet,
    Image,
    Touchable,
    TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable'

import { Button } from "../components/button";
import { useNavigation } from "@react-navigation/native";


export default function Welcome() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Animatable.View animation='fadeInUp' duration={2000} easing='ease-out-back' direction='normal' style={styles.containerLogo}>
                <Animatable.Image animation='flipInY' source={require("../assets/logo.jpg")} style={styles.image} />
            </Animatable.View>

            <Animatable.View delay={450} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Monitore, organize seu negócio de qualquer lugar</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <View style={{ marginTop: '10%' }}>
                    <Button title="Acessar"
                        onPress={() => navigation.navigate('Entry')} />
                </View>
            </Animatable.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8ac126',
    },
    containerLogo: {
        flex: 2,
        width: '100%',
        padding: 0,
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        maxHeight: '50%',
        resizeMode: "contain",
        borderRadius: 200,
        borderWidth: 3,
        borderColor: '#194824'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingStart: '5%',
        paddingEnd: '5%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#67980d',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        fontSize: 16,
        color: 'gray'
    }
});
