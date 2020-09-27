import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState([
    { name: "Sparsh", id: 1 },
    { name: "Code", id: 2 },
    { name: "Facebook", id: 3 },
    { name: "NF", id: 4 },
    { name: "Eminem", id: 5 },
    { name: "MGK", id: 6 },
    { name: "TuPac", id: 7 },
    { name: "Larry Page", id: 8 },
    { name: "Silicon Valley", id: 9 },
    { name: "Dustin Moskovitz", id: 10 },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setName((prevName) => {
      return prevName.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
