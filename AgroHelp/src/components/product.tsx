import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Product() {
  return (
    <View style={styles.content}>
      <Image
        source={require("../assets/product.png")}
        style={{ width: 80, height: 80, margin: 10 }}
      />
      <Text style={styles.text}>Super fosfato 46%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8AC126",
    borderRadius: 24,
  },
  text: {
    borderTopColor: "#8AC126",
    borderTopWidth: 2,
    padding: 10,
  },
});
