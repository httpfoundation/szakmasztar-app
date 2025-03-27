import Image from "next/image";
import starform from "@/assets/images/starform.svg";

const Starform = () => {
  return (
    <Image
      src={starform}
      alt=""
      role="presentation"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        pointerEvents: "none",
        width: "592px",
        height: "auto",
      }}
    />
  );
};

export default Starform;
