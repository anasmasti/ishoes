import { SafeAreaView, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import InfoSection from "../components/InfoSection";
import MainLayout from "../layouts/MainLayout";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  const ITEMS = [
    {
      id: "13",
      href: "/details/item1",
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
      href: "/details/item1",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "43",
      href: "/details/item1",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "53",
      href: "/details/item1",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "63",
      href: "/details/item1",
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
      href: "/details/item1",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "32",
      href: "/details/item1",
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
      href: "/details/item1",
      title: "item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
  ];

  const SEASONS = [
    {
      id: "13",
      title: "Winter",
      type: "caption",
      imageUrl:
        "https://images.unsplash.com/photo-1614587420548-2adb33d9c957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: "23",
      title: "Spring",
      href: "/details/item1",
      type: "caption",
      imageUrl:
        "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2915&q=80",
    },
    {
      id: "33",
      title: "Summer",
      href: "/details/item1",
      type: "caption",
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2913&q=80",
    },
    {
      id: "43",
      title: "Autumn",
      type: "caption",
      href: "/details/item1",
      imageUrl:
        "https://images.unsplash.com/photo-1677111974795-249a0172de5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2964&q=80",
    },
  ];

  const SECTIONS = [
    {
      id: "139",
      title: "Trend",
      items: ITEMS,
      itemsSize: { height: 125, width: 170 },
    },
    {
      id: "239",
      title: "Seasons",
      items: SEASONS,
      itemsSize: { height: 125, width: 250 },
    },
  ];

  return (
    <SafeAreaView>
      <View style={style.body}>
        <MainLayout>
          <Card
            title="New release"
            type="caption"
            size={{ height: 180 }}
            imageUrl="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            href="/list"
          />
          <>
            {SECTIONS.map(({ id, ...item }) => (
              <InfoSection key={id} {...item} />
            ))}
          </>
        </MainLayout>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    gap: 35,
    paddingHorizontal: 14,
  },
});
