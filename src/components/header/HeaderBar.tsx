import { View, StyleSheet } from "react-native";
import { MenuIcon } from "../icons/MenuIcon";
import React from "react";
import HeaderBarElement from "./HeaderBarElement";
import FavIcon from "../icons/FavIcon";
import Logo from "../Logo";

export type HeaderMenu = {
  id: number;
  title: string | React.JSX.Element;
};

export default function HeaderBar() {
  const HEADER_MENU: HeaderMenu[] = [
    { id: 1, title: <MenuIcon /> },
    { id: 2, title: <Logo /> },
    { id: 3, title: <FavIcon /> },
  ];

  return (
    <View style={styles.container}>
      {HEADER_MENU.map(({ id, title }) => (
        <HeaderBarElement key={id} title={title} />
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
