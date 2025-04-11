"use client";

import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Fab, Stack, SxProps } from "@mui/material";
import PageTitle from "../common/PageTitle";
import PageContainer from "../layouts/PageContainer";

interface GradientTitleProps {
  children: string;
  sx?: SxProps;
}

const GradientTitle = ({ children, sx }: GradientTitleProps) => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        width: "100%",
        color: "white",
        background: "linear-gradient(to right, #FFDF12 -20%, #EA5A32, #71376A 110%)",
        ...sx,
      }}
    >
      <PageContainer
        padding={1.5}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Fab color="primary" size="small" sx={{ ml: -1, mr: 2 }} onClick={() => router.back()}>
          <ArrowBackIcon />
        </Fab>
        <PageTitle>{children}</PageTitle>
      </PageContainer>
    </Stack>
  );
};

export default GradientTitle;
