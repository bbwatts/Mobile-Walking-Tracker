import { StyleSheet, Text, View } from "react-native";

export default function WalkMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Walk Map not supported on web</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});
