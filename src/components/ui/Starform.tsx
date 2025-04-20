import { CSSProperties } from "react";
import Image from "next/image";
import starform from "@/assets/images/starform.svg";

const Starform = ({ style }: { style?: CSSProperties }) => {
  return (
    <Image
      src={starform}
      alt=""
      role="presentation"
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        pointerEvents: "none",
        width: "592px",
        height: "auto",
        ...style,
      }}
    />
  );
};

export default Starform;
