import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  StyleSheet,
} from "react-native";

type Props = TouchableOpacity & {
  title: string;
  isLoading?: boolean;
};

function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.touchable}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    backgroundColor: "#8ac126",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export { Button };
