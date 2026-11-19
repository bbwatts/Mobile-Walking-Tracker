import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    width: "20%",
  },
});

export default function MoodNoteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Mood Notes</Text>
      <TextInput
        multiline={true}
        placeholder="Enter your mood note"
        style={styles.inputText}
      />
    </View>
  );

  // need to have a screen to save mood notes with a text input and a button to save the note to async storage. The notes should be saved with a timestamp and displayed in a list below the input. The user should be able to delete notes from the list.
}
