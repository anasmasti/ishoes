import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { ReactElement } from "react";
import { CardProps } from "../core/types/Card";
import { useRouter } from "expo-router";

export default function Card({
  title,
  imageUrl,
  type,
  size,
  href = "/",
}: CardProps): ReactElement {
  const router = useRouter();

  function goToDetails() {
    router.push(href);
  }

  return (
    <TouchableOpacity onPress={() => goToDetails()}>
      <ImageBackground
        source={{
          uri: imageUrl,
        }}
        borderRadius={15}
        style={[
          style.card,
          type === "regular" ? style.regular : style.caption,
          size,
          style.cover,
        ]}
      >
        <Text style={style.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 1,
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
