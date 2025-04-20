import { Metadata } from "next";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";
import YellowTitle from "@/components/ui/YellowTitle";
import QrCodeScanner from "./QrCodeScanner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "QR kód beolvasása",
};

const QrCodePage = async () => {
  return (
    <>
      <YellowTitle>QR-kód beolvasása</YellowTitle>
      <PageContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          pt: 2,
          position: "relative",
          flexGrow: 1,
        }}
      >
        <Starform />
        <SzakmaSztarSymbol />
        <FormattedContent variant="body1" sx={{ textAlign: "center", mb: 3 }}>
          Olvasd be a szakmai program QR-kód-ját! Első alkalommal engedélyezned kell a kamerád
          használatát az alkalmazás számára.
        </FormattedContent>
        <QrCodeScanner />
      </PageContainer>
    </>
  );
};

export default QrCodePage;
