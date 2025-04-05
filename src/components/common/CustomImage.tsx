import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImageProps as NextImageProps } from "next/image";

export function CustomImage({
  src,
  srcSet,
  alt,
  style,
  width,
  height,
  ...rest
}: Omit<NextImageProps, "src"> & {
  srcSet?: string | null;
  src?: NextImageProps["src"];
}) {
  const imageSrc = getImageSrc(src);
  return (
    <img
      srcSet={srcSet || undefined}
      sizes={width ? `${width}px` : undefined}
      src={imageSrc}
      alt={alt}
      style={{
        width,
        height,
        ...style,
      }}
      {...rest}
    />
  );
}

function getImageSrc(src?: string | StaticImport): string {
  if (!src) {
    return "";
  }
  if (typeof src === "string") {
    return src;
  }
  if ("src" in src) {
    return src.src;
  }
  if ("default" in src) {
    return src.default.src;
  }
  return "";
}
