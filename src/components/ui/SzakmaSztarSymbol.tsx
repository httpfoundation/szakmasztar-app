import { CSSProperties } from "react";
import Image from "next/image";
import szakmasztarSymbol from "@/assets/images/szakmasztar-symbol.svg";

const SzakmaSztarSymbol = ({ style }: { style?: CSSProperties }) => {
  return (
    <Image
      src={szakmasztarSymbol}
      alt=""
      role="presentation"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "300px",
        height: "auto",
        opacity: 0.2,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
};

export default SzakmaSztarSymbol;
