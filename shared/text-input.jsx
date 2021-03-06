import { useState } from "react";
import { StyleSheet, Text, TextInput as RNTextInput, View } from "react-native";

export function TextInput(props) {
  const { label, iconRender, placeholder, style, mode, onChangeText, value } =
    props;
  const [foucesed, setFocused] = useState(false);

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        {iconRender(foucesed)}
        <RNTextInput
          editable
          keyboardType={mode}
          style={styles.editor}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 12,
  },
  editor: {
    paddingHorizontal: 8,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    borderRadius: 8,
    shadowColor: "#333",
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
