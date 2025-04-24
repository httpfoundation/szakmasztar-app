"use client";

import { useEffect, useState } from "react";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";
import QrCodeScanner from "./QrCodeScanner";

const QrCodePageContent = () => {
  const [isKiosk, setIsKiosk] = useState<string | null>(null);

  useEffect(() => {
    const storedKioskKey = localStorage.getItem("kiosk");
    setIsKiosk(storedKioskKey);
  }, []);
  return (
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
      {!isKiosk && (
        <>
          <FormattedContent variant="body1" sx={{ textAlign: "center", mb: 3 }}>
            Olvasd be a szakmai program QR-kód-ját! Első alkalommal engedélyezned kell a kamerád
            használatát az alkalmazás számára.
          </FormattedContent>
          <QrCodeScanner />
        </>
      )}
      {isKiosk && (
        <FormattedContent variant="body1" sx={{ textAlign: "center", mb: 3 }}>
          Ezen a képernyőn a QR-kód beolvasása nem lehetséges. Használd a mobiltelefonodon a Szakma
          Sztár webalkazást, és szkenneld be a mobilodon a kihelyezett táblákon látható QR-kódokat,
          hogy megtudd milyen szakmai program zajlik az adott helyen.
        </FormattedContent>
      )}
    </PageContainer>
  );
};

export default QrCodePageContent;
