import PageTitle from "@/components/common/PageTitle";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import GradientTitle from "@/components/ui/GradientTitle";
import QrCodeScanner from "./QrCodeScanner";

export const dynamic = "force-static";

const QrCodePage = async () => {
  return (
    <>
      <GradientTitle>QR-kód beolvasása</GradientTitle>
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
        <FormattedContent variant="body1" sx={{ textAlign: "center", mb: 3 }}>
          Olvasd be a szakmai program QR-kód-ját! Első alkalommal engedélyezned kell a kamerád
          használatát az alkalmazás számára. Ha nem működik a telefonodon a QR-kód beolvasás, akkor
          a nyitólapon be tudod írni a kielyezett számkódot is.
        </FormattedContent>
        <FormattedContent variant="body1" sx={{ textAlign: "center", mb: 3 }}>
          A kód beolvasása után azonnal megjelennek a program részletei.
        </FormattedContent>
        <QrCodeScanner />
      </PageContainer>
    </>
  );
};

export default QrCodePage;
