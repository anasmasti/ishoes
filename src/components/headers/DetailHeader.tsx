import { View, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import FavIcon from "../icons/FavIcon";
import Badge from "../Badge";

export default function DetailHeader() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      }}
      borderRadius={15}
      style={[style.container]}
    >
      <View style={style.body}>
        <Badge title={"item 1"} backgroundColor={"green"} />
        <FavIcon></FavIcon>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    height: 450,
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
  },

  body: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});
