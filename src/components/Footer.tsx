import { View, StyleSheet, Text } from "react-native";
import React from "react";

export type FOOTER_MENU = {
  id: number;
  title: string;
};

export default function Footer() {
  const FOOTER_MENU: FOOTER_MENU[] = [
    { id: 1, title: "Copyright" },
    { id: 2, title: "PP" },
  ];

  return (
    <View style={styles.container}>
      {FOOTER_MENU.map(({ id, title }) => (
        <Text key={id}>{title}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
