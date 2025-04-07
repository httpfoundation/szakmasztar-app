import { ReactNode } from "react";
import { Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

interface BaseLayoutProps {
  children: ReactNode;
  title: string;
}

export default function BaseLayout({ children, title }: BaseLayoutProps) {
  return (
    <Stack
      direction="column"
      sx={{
        minHeight: "100vh",
        height: "100%",
        bgcolor: "primary.main",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <Header title={title} />
      <Main>{children}</Main>
      <Footer />
    </Stack>
  );
}
