import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";
import QrCodeScanner from "./QrCodeScanner";

export const dynamic = "force-static";

const QrCodePage = async () => {
  return (
    <PageContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <PageTitle sx={{ textAlign: "center" }}>QR kód beolvasása</PageTitle>
      <QrCodeScanner />
    </PageContainer>
  );
};

export default QrCodePage;
