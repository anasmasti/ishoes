import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Badge from "../../components/Badge";
import { Link, useLocalSearchParams } from "expo-router";
import DetailHeader from "../../components/headers/DetailHeader";

export default function Detail() {
  const COLORS = ["black", "green"];
  const { id } = useLocalSearchParams();

  return (
    <>
      <DetailHeader></DetailHeader>
      <View style={style.info}>
        <Text style={style.main_title}>
          <Link href={"/"}>{"<"}</Link> {id}
        </Text>

        <Text style={style.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          suscipit impedit, qui delectus, repellat magnam accusantium ducimus
          quam sapiente mollitia corrupti necessitatibus, deleniti perspiciatis
          officia fuga nisi alias vitae adipisci!
        </Text>
        <View>
          <Text style={style.title}>Colors</Text>
          <View style={style.colors}>
            {COLORS.map((color) => (
              <Badge key={color} title="Sprint" backgroundColor={color} />
            ))}
          </View>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  info: {
    gap: 12,
    paddingHorizontal: 14,
  },
  para: {
    fontSize: 25,
    color: "#bbb",
  },
  colors: {
    flexDirection: "row",
    gap: 5,
  },
  main_title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 30,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
