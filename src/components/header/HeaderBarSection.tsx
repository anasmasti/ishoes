import { View, Text } from "react-native";
import { Fragment } from "react";
import { HeaderMenu } from "./HeaderBar";

export default function HeaderBarSection(item: HeaderMenu) {
  function isString(value: HeaderMenu["title"]): value is string {
    return typeof value === "string";
  }

  function renderItem(item: HeaderMenu) {
    const { id, title } = item;

    return isString(title) ? (
      <Text key={id}>{title}</Text>
    ) : (
      <Fragment key={id}>{title}</Fragment>
    );
  }

  return <View>{renderItem(item)}</View>;
}
