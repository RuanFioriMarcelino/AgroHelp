import { TextInput, TextInputProps, View } from "react-native";
import { ReactNode } from "react";

function Input({ children }: { children: ReactNode }) {
  return <View>{children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return <TextInput {...rest} />;
}

Input.Field = Field;

export { Input };
