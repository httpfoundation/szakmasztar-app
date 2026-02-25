"use client";

import { FC, ReactNode } from "react";
import { ShortCodeContextProvider, YoutubeVideo } from "@httpfoundation/shortcodes";
import { Button } from "@mui/material";
import Link from "@/components/common/Link";
import BackButton from "@/components/ui/BackButton";

interface ShortCodeContextProps {
  children: ReactNode;
}

const ShortCodeContext: FC<ShortCodeContextProps> = ({ children }) => {
  return (
    <ShortCodeContextProvider
      backButton={() => <BackButton />}
      contactCards={() => <></>}
      gallery={() => <></>}
      youtube={(params) => (
        <YoutubeVideo
          videoId={params["videoId"]}
          title={params["title"]}
          variant={params["variant"] as "dark" | "light"}
        />
      )}
      button={(params) => (
        <Link href={params["href"]} target={params["target"]}>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "fit-content", fontSize: 15, px: 2 }}
          >
            {params["text"] ?? "Gomb"}
          </Button>
        </Link>
      )}
    >
      {children}
    </ShortCodeContextProvider>
  );
};

export default ShortCodeContext;
