import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'

import { Input } from "../components/input";
import { Button } from "../components/button";
import { SigninGoogleOrApple } from "../components/singinOr";
import { InputPassword } from '../components/inputPassword';
import { TextInitial } from '../components/textInitial';
import { useNavigation } from "@react-navigation/native";


export default function Register() {
  const navigation = useNavigation();
  return (
    <Animatable.View animation='fadeInRight' duration={800} style={styles.container}>
      <View style={{ marginTop: 5, flex: 0.4, maxHeight: 80 }}><TextInitial title='Criar Conta' /></View>
      <View style={styles.inputContainer}>
        <View style={styles.boxInput}>
          <Input.Field
            style={styles.input}
            placeholder="Primeiro Nome"
            placeholderTextColor="#A7A7A7"
            keyboardType="default"
          />
        </View>
        <View style={styles.boxInput}>
          <Input.Field
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A7A7A7"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.boxInput}>
          <View style={styles.InputPassword}>
            <InputPassword />
          </View>

        </View>
      </View>
      <View style={styles.contentBottom}>
        <View style={styles.TextButton}>
          <Button title="Criar Agora" />
        </View>

        <View >
          <SigninGoogleOrApple />
        </View>

        <View style={styles.TextSupport}>
          <Text style={{ fontSize: 14, color: "#A7A7A7" }}>
            Já Tem Uma Conta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
            <Text style={{ fontSize: 14, color: "#8ac126" }}> Entrar Agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    rowGap: 20
  },
  entry: {
    flexDirection: "row",
    justifyContent: "center",
    position: 'relative',
  },
  inputContainer: {
    rowGap: 20
  },
  boxInput: {

    flexDirection: "row",
    alignItems: "center",
  },
  iconUser: {
    marginRight: 4,
    fontSize: 40,
  },
  input: {
    height: 80,
    width: 334,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "green",
    padding: 22,
    color: "#8ac126",
    fontWeight: "900",
    fontSize: 16
  },
  InputPassword: {
    height: 80,
    width: 334,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "green",
    paddingLeft: 22,
    paddingRight: 10,
    justifyContent: 'center'
  },
  TextPass: {
    fontSize: 14,
    color: "#A7A7A7",
  },
  TextSupport: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextButton: {
    width: 332,
  },
  contentBottom: {
    flex: 0.4,
    alignItems: 'center',
    rowGap: 40
  }
});
