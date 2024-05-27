import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { Input } from "../components/input";
import { Button } from "../components/button";
import { InputPassword } from "../components/inputPassword";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SigninGoogleOrApple } from "../components/singinOr";
import { TextInitial } from "../components/textInitial";



export default function Entry() {
    const navigation = useNavigation()

    return (
        <Animatable.View animation='fadeInDown' duration={800} style={styles.container}>
            <View style={{ marginTop: 5, flex: 0.4, maxHeight: 80 }}><TextInitial title="Entrar" /></View>
            <View style={styles.inputContainer}>
                <View style={styles.boxInput}>
                    <Icon
                        style={styles.iconUser}
                        name="user-circle"
                        color="#8ac126"

                    />
                    <Input.Field
                        style={styles.input}
                        placeholder="Insira Usuario ou E-Mail"
                        placeholderTextColor="#A7A7A7"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.boxInput}>
                    <Icon
                        style={styles.iconUser}
                        name="user-circle"
                        color="#8ac126"
                    />
                    <View style={styles.InputPassword} >
                        <InputPassword />
                    </View>
                </View>
            </View>
            <View style={styles.contentBottom}>
                <TouchableOpacity ><Text style={styles.TextPass}>Esqueci Minha Senha</Text></TouchableOpacity>
                <View style={styles.TextButton}><Button title="Entrar" onPress={() => RoutesTab} /></View>
                <View >
                    <SigninGoogleOrApple />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, color: '#A7A7A7' }} >Não Tem Uma Conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ fontSize: 14, color: '#8ac126' }}> Criar Agora</Text></TouchableOpacity>
                </View>
            </View>
        </Animatable.View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        rowGap: 40,
    },
    inputContainer: {
        rowGap: 27
    },
    boxInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconUser: {
        marginRight: 4,
        fontSize: 40,
    },
    input: {
        height: 52,
        width: 271,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "green",
        padding: 12,
        color: "#8ac126",
        fontWeight: "900",
        fontSize: 16
    },
    InputPassword: {
        height: 52,
        width: 271,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "green",
        paddingLeft: 12,
        paddingRight: 10,
    },
    TextPass: {
        fontSize: 14,
        color: '#A7A7A7',
    },
    TextButton: {
        width: 241
    },
    logoMark: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 72,
    },
    contentBottom: {
        flex: 0.3,
        alignItems: 'center',
        rowGap: 40
    }
});