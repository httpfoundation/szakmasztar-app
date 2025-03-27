import { Stack } from "@mui/material";
import PageTitle from "../common/PageTitle";
import PageContainer from "../layouts/PageContainer";

interface GradientTitleProps {
  children: string;
}

const GradientTitle = ({ children }: GradientTitleProps) => {
  return (
    <Stack
      sx={{
        width: "100%",
        color: "white",
        background: "linear-gradient(to right, #FFDF12 -20%, #EA5A32, #71376A 110%)",
      }}
    >
      <PageContainer>
        <PageTitle>{children}</PageTitle>
      </PageContainer>
    </Stack>
  );
};

export default GradientTitle;

