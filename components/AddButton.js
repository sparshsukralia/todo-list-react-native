import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AddButton({ submitHandler, text }) {
  return (
    <TouchableOpacity onPress={() => submitHandler(text)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333399",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
});
