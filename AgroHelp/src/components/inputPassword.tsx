import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Material from "react-native-vector-icons/MaterialIcons";

import { Input } from "./input";

function InputPassword() {
  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState("");

  const passwordNBSP = password.replace(/[' ']+/g, "");

  return (
    <View>
      <Input.Field
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#A7A7A7"
        secureTextEntry={isPassword}
        onChangeText={setPassword}
        value={passwordNBSP}
      />
      <View style={styles.touchableView}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setIsPassword(!isPassword)}
        >
          {isPassword == true ? (
            <Material name={"visibility"} color="#A7A7A7" size={26} />
          ) : (
            <Material name={"visibility-off"} color="#A7A7A7" size={26} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { InputPassword };

const styles = StyleSheet.create({
  input: {
    paddingRight: 40,
    height: "100%",
    color: "#8ac126",
    fontWeight: "900",
    fontSize: 16,
  },
  touchableView: {
    position: "absolute",
    height: "100%",
    right: 5,
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
  },
});
