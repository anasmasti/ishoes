import { View, Text } from "react-native";
import { Fragment } from "react";
import { HeaderMenu } from "./HeaderBar";

interface HeaderBarSectionProps {
  title: HeaderMenu["title"];
}
export default function HeaderBarSection({ title }: HeaderBarSectionProps) {
  function isString(value: HeaderMenu["title"]): value is string {
    return typeof value === "string";
  }

  function renderItem(title: HeaderMenu["title"]) {
    return isString(title) ? (
      <Text>{title}</Text>
    ) : (
      <Fragment>{title}</Fragment>
    );
  }

  return <View>{renderItem(title)}</View>;
}
