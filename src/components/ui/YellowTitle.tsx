"use client";

import { useRouter } from "next/navigation";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Fab, Stack, SxProps } from "@mui/material";
import PageTitle from "../common/PageTitle";
import PageContainer from "../layouts/PageContainer";

interface YellowTitleProps {
  children: string;
  sx?: SxProps;
}

const YellowTitle = ({ children, sx }: YellowTitleProps) => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        width: "100%",
        color: "white",
        background: "#F4B02A",
        position: "relative",
        zIndex: 10,
        ...sx,
      }}
    >
      <PageContainer
        padding={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Fab
          color="primary"
          size="small"
          sx={{
            ml: -1,
            mr: 2,
            flexShrink: 0,
            color: "white",
            boxShadow: 0,
            width: "36px",
            height: "36px",
          }}
          onClick={() => router.back()}
        >
          <ChevronLeft />
        </Fab>
        <PageTitle color="#350F38">{children}</PageTitle>
      </PageContainer>
    </Stack>
  );
};

export default YellowTitle;
