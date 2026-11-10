import { StyleSheet, Text, View } from "react-native";

export default function WalkMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>The map is available in the mobile app.</Text>
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
