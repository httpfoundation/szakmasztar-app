import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const revalidate = 3600;

const QrCodePage = async () => {
  return (
    <PageContainer>
      <PageTitle>QR kód beolvasása</PageTitle>
    </PageContainer>
  );
};

export default QrCodePage;
