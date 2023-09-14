export type CardProps = {
  title: string;
  imageUrl: string;
  type: "regular" | "caption";
  size: {
    height?: number;
    width?: number;
  };
};
