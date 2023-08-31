import { Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  type: "regular" | "caption";
  size: {
    height?: number;
    width?: number;
  };
}

export default function Card({ title, imageUrl, type, size }: CardProps) {
  return (
    <ImageBackground
      source={{
        uri: imageUrl,
      }}
      borderRadius={15}
      style={[
        style.container,
        type === "regular" ? style.regular : style.caption,
        size,
        style.cover,
      ]}
    >
      <Text style={style.title}>{title}</Text>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    shadowOffset: {
      width: 1,
      height: 4.75,
    },
    shadowOpacity: 0.09,
    shadowRadius: 8,
  },
  regular: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  caption: {
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    opacity: 0.9,
    resizeMode: "cover",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    shadowOffset: {
      width: 1,
      height: 4.75,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
