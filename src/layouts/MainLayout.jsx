import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MainLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
    <View style={styles.footer}>
      <Text style={styles.footerText}>ToDoApp © 2024</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  footer: { padding: 10, alignItems: "center" },
  footerText: { fontSize: 14, color: "#aaa" },
});

export default MainLayout;
