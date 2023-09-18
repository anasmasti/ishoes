import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Card";
import Badge from "../components/Badge";

export default function Detail() {
  const COLORS = ["black", "green"];

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Card
          title="Item"
          type="caption"
          imageUrl="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
        />
      </View>
      <View style={style.info}>
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
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, height: "100%" },
  header: { height: "50%", gap: 12, top: -70 },
  info: {
    gap: 12,
    paddingHorizontal: 10,
    top: -50,
  },
  para: {
    fontSize: 25,
    color: "#bbb",
  },
  colors: {
    flexDirection: "row",
    gap: 5,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
