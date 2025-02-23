import { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

interface BaseLayoutProps {
  children: ReactNode;
  title: string;
}

export default function BaseLayout({ children, title }: BaseLayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: `linear-gradient(180deg, 
          rgba(53,15,56) 0%, 
          rgba(53,15,56) 60%,
          rgba(113,55,106) 100%
        )`,
      }}
    >
      <Header title={title} />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
}
