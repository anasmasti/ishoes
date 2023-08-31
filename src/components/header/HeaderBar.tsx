import { View, StyleSheet } from "react-native";
import { MenuIcon } from "../icons/MenuIcon";
import React from "react";
import HeaderBarSection from "./HeaderBarSection";
import FavIcon from "../icons/FavIcon";

export type HeaderMenu = {
  id: number;
  title: string | JSX.Element;
};

export default function HeaderBar() {
  const HEADER_MENU: HeaderMenu[] = [
    { id: 1, title: <MenuIcon /> },
    { id: 2, title: "LOGO" },
    { id: 3, title: <FavIcon /> },
  ];

  return (
    <View style={styles.container}>
      {HEADER_MENU.map((item) => (
        <HeaderBarSection {...item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "5%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
