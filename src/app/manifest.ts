import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Szakma Sztár",
    short_name: "Szakma Sztár",
    description:
      "A Szakma Sztár Fesztivál a szakmák iránt érdeklődő fiatalok és pályaválasztók számára kínál egyedülálló lehetőséget. A rendezvényen a résztvevők megismerkedhetnek a legnépszerűbb szakmákkal, interaktív bemutatók és versenyek várják őket.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

