import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import ListDetail from "./src/screens/ListDetail";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home /> */}
      <ListDetail />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
