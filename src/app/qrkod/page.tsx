import { Metadata } from "next";
import YellowTitle from "@/components/ui/YellowTitle";
import QrCodePageContent from "./QrCodePageContent";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "QR kód beolvasása",
};

const QrCodePage = () => {
  return (
    <>
      <YellowTitle>QR-kód beolvasása</YellowTitle>
      <QrCodePageContent />
    </>
  );
};

export default QrCodePage;
