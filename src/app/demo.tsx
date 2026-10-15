import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default function Demo() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Demo Page</Text>
    </View>
  );
}
