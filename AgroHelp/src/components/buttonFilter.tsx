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

function ButtonFilter({ title, isLoading = false, ...rest }: Props) {
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
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 8,
  },
  text: {
    color: "#8AC126",
    fontSize: 16,
    fontWeight: "400",
  },
});

export { ButtonFilter };
