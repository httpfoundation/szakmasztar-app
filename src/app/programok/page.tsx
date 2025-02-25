import { Typography } from "@mui/material";
import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const revalidate = 3600;

const SchedulePage = async () => {
  return (
    <PageContainer>
      <PageTitle>Programok</PageTitle>
      <Typography variant="body1" color="primary.contrastText">
        Programlista...
      </Typography>
    </PageContainer>
  );
};

export default SchedulePage;
