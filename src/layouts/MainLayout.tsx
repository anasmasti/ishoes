import React from "react";
import { ChildrenProps } from "../core/types/Common";
import { View, StyleSheet } from "react-native";
import HeaderBar from "../components/headers/HeaderBar";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <View style={styles.container}>
        <HeaderBar />
      </View>
      {children}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});
