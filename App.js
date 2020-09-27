import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [name, setName] = useState([
    { name: "Sparsh", id: 1 },
    { name: "Shubham", id: 2 },
    { name: "Shipra", id: 3 },
    { name: "Shagun", id: 4 },
    { name: "Sharma", id: 5 },
    { name: "Sarthak", id: 6 },
    { name: "Shrishti", id: 7 },
    { name: "Shreya", id: 8 },
    { name: "Shavi", id: 9 },
    { name: "Shayla", id: 10 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={name}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {name.map((item) => {
          return (
            <View key={item.key} style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 15,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    margin: 10,
    fontSize: 20,
    padding: 20,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "darkslateblue",
  },
  textContainer: {
    overflow: "hidden",
    borderRadius: 10,
  },
});
