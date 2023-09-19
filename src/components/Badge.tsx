import { View, StyleSheet, Text } from "react-native";
import React, { ReactElement } from "react";

type BadgeProps = {
  title: string;
  backgroundColor: string;
};

export default function Badge({
  title,
  backgroundColor,
}: BadgeProps): ReactElement {
  return (
    <View style={[style.container, { backgroundColor: backgroundColor }]}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 23,
    borderRadius: 23,
    padding: 4,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  title: { color: "white", fontSize: 13, fontWeight: "bold" },
});
