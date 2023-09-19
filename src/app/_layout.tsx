import { Slot } from "expo-router";
import Footer from "../components/Footer";
import { StyleSheet, View } from "react-native";

export default function HomeLayout() {
  return (
    <View style={style.container}>
      <Slot />
      <Footer />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    gap: 23,
  },
});
