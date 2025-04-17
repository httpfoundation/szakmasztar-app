"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import { Scanner } from "@yudiel/react-qr-scanner";

const QrCodeScanner = () => {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!!error && (
        <Typography sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}>
          A QR kód beolvasásához engedélyezni kell a kamerát!
        </Typography>
      )}

      <Stack sx={{ width: "90vmin", maxWidth: "600px", aspectRatio: "1 / 1" }}>
        <Scanner
          onScan={(result) => {
            setError(false);

            console.log(result);

            const url = result.find(
              (r) =>
                r.rawValue.startsWith("https://szakmasztar-app.vercel.app/") ||
                r.rawValue.startsWith("https://app.szakmasztar.hu/")
            );

            if (url) {
              router.push(url.rawValue);
            }
          }}
          onError={() => setError(true)}
          styles={{ container: { width: "100%", height: "100%" } }}
        />
      </Stack>
    </>
  );
};

export default QrCodeScanner;
