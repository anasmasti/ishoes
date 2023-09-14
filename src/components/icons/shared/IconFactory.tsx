import { Ionicons } from "@expo/vector-icons";

interface IconFactoryProps {
  type: keyof typeof Ionicons.glyphMap;
}

export default function IconFactory({ type }: IconFactoryProps) {
  return <Ionicons name={type} size={24} color="black" />;
}
