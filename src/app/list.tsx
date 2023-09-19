import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Card from "../components/Card";
import MainLayout from "../layouts/MainLayout";

export default function ListDetail({ title = "List" }) {
  const ITEMS = [
    {
      id: "13",
      title: "item 1",
      imageUrl:
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "23",
      title: "item 2",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "33",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "43",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "53",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "63",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "73",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1636718283028-bb6845dbf3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
    },
    {
      id: "83",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "93",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "32",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1636718283028-bb6845dbf3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
    },
    {
      id: "34",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "36",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
  ];

  return (
    <SafeAreaView>
      <View style={style.container}>
        <MainLayout>
          <Text style={style.title}>{title}</Text>
          <FlatList
            ItemSeparatorComponent={() => <View style={{ height: 12 }}></View>}
            data={ITEMS}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                size={{ height: 125 }}
                imageUrl={item.imageUrl}
                type={"regular"}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </MainLayout>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: { paddingHorizontal: 14 },
  title: { fontSize: 40, paddingVertical: 8 },
});
