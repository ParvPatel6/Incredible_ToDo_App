import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const handlePress = () => {
    alert("Easter Egg: Keep exploring!");
  };

  return (
    <MainLayout>
      <Text style={styles.text}>App: My ToDo App</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.name}>Name: Parv Patel</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  name: {
    fontSize: 16,
    marginVertical: 10,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

export default AboutScreen;
