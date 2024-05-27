import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { IconLine } from "./iconLine";

function SigninGoogleOrApple() {
  return (
    <View style={{ rowGap: 30 }}>
      <IconLine />
      <View style={styles.logoMark}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="apple" size={40} color="#D3D3D3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoMark: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 72,
  },
});
export { SigninGoogleOrApple };
