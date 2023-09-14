import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Card from "./Card";

interface InfoSectionProps {
  title: string;
  items: any;
  itemsSize: {
    height: number;
    width: number;
  };
}

export default function InfoSection({
  title,
  items,
  itemsSize,
}: InfoSectionProps) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={style.action}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={style.list}
        ItemSeparatorComponent={() => <View style={{ width: 12 }}></View>}
        data={items}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            size={itemsSize}
            imageUrl={item.imageUrl}
            type={item.type || "regular"}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 10,
  },
  list: {
    paddingVertical: 14,
  },
  title: {
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  action: {
    fontSize: 12,
    color: "green",
  },
});
