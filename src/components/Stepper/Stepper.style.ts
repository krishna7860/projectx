import { CSSProperties } from "react";

interface Styles {
  header: (width?: string, titleColor?: string) => CSSProperties;
  headerList: CSSProperties;
}

const styles: Styles = {
  header: (width?: string, titleColor?: string) => ({
    width: width || "100%",
    color: titleColor || "black",
  }),
  headerList: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "left",
    alignItems: "center",
    height: "40px",
    flexShrink: 0,
  },
};

export default styles;
