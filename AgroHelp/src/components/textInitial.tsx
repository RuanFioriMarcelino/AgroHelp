import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Ion from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../routes/types";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = Text & {
  title: string;
};

function TextInitial({ title }: Props) {
  type RegisterScreenRouteProp = RouteProp<RootStackParamList, "Register">;
  type NavigationProp = StackNavigationProp<RootStackParamList, "Register">;
  const route = useRoute<RegisterScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  const renderArrow = () => {
    if (route.name === "Register") {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("Entry")}
          style={{
            marginRight: 290,
            justifyContent: "center",
          }}
        >
          <Ion name="chevron-back" size={28} color="#8ac126" />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View>
      <View style={styles.titleContent}>
        <View
          style={{
            position: "absolute",
            marginTop: 16,
          }}
        >
          {renderArrow()}
        </View>
        <Text style={styles.TextEntry}>{title}</Text>
      </View>
      <View style={styles.TextSupport}>
        <Text style={{ fontSize: 12, color: "#A7A7A7" }}>
          Se precisa de ajuda
        </Text>
        <TouchableOpacity>
          <Text style={styles.TextClick}> Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Arrow({ title }: Props) {
  type RegisterScreenRouteProp = RouteProp<RootStackParamList, "Shop">;
  type NavigationProp = StackNavigationProp<RootStackParamList, "Shop">;
  const route = useRoute<RegisterScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  const renderArrow = () => {
    if (route.name === "Shop") {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            marginRight: 320,
            justifyContent: "center",
          }}
        >
          <Ion name="chevron-back" size={28} color="#8ac126" />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.titleContent}>
      <View
        style={{
          position: "absolute",
          marginTop: 12,
        }}
      >
        {renderArrow()}
      </View>
      <Text style={styles.TextEntryArrow}>{title}</Text>
    </View>
  );
}

TextInitial.Arrow = Arrow;

export { TextInitial };

const styles = StyleSheet.create({
  titleContent: {
    flexDirection: "row",
    justifyContent: "center",
    rowGap: 20,
    flex: 1,
  },
  TextEntry: {
    fontSize: 40,
    fontWeight: "800",
    color: "#8ac126",
    textAlign: "center",
  },
  TextEntryArrow: {
    fontSize: 35,
    fontWeight: "800",
    color: "#67980D",
    textAlign: "center",
  },
  TextSupport: {
    flexDirection: "row",
    justifyContent: "center",
  },
  TextClick: {
    color: "#8ac126",
    fontSize: 12,
  },
});
