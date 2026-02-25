"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import { Scanner } from "@yudiel/react-qr-scanner";
import JumpCodeSection from "../_components/JumpCodeSection";

export function useCameraPermission() {
  const [state, setState] = useState<"loading" | "granted" | "denied" | "prompt" | "unsupported">(
    "loading"
  );

  useEffect(() => {
    let permissionStatus: PermissionStatus;

    async function checkPermission() {
      if (!navigator.permissions) {
        setState("unsupported");
        return;
      }

      try {
        permissionStatus = await navigator.permissions.query({
          name: "camera",
        });

        setState(permissionStatus.state);

        permissionStatus.onchange = () => {
          setState(permissionStatus.state);
        };
      } catch {
        setState("unsupported");
      }
    }

    checkPermission();

    return () => {
      if (permissionStatus) {
        permissionStatus.onchange = null;
      }
    };
  }, []);

  return state;
}

const QrCodeScanner = () => {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const permission = useCameraPermission();

  if (!mounted) {
    return null;
  }

  return (
    <>
      {permission === "loading" ||
        (permission === "prompt" && (
          <Typography
            sx={{
              textAlign: "center",
              mb: 3,
              fontWeight: "bold",
              backgroundColor: "primary.light",
              py: 2,
              px: 4,
              borderRadius: 100,
            }}
          >
            A QR kód beolvasásához engedélyezned kell a kamera használatát!
          </Typography>
        ))}
      {permission === "unsupported" && (
        <Typography
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: "bold",
            backgroundColor: "primary.light",
            py: 2,
            px: 4,
            borderRadius: 100,
          }}
        >
          A QR kód beolvasása nem támogatott ezen az eszközön.
        </Typography>
      )}
      {(error || permission === "denied") && (
        <>
          <Typography
            sx={{
              textAlign: "center",
              mb: 3,
              fontWeight: "bold",
              backgroundColor: "error.dark",
              py: 2,
              px: 4,
              borderRadius: 100,
            }}
          >
            A QR kód beolvasásához engedélyezned kell a kamera használatát!
          </Typography>
        </>
      )}

      <Stack sx={{ width: "90vmin", maxWidth: "600px", aspectRatio: "1 / 1", mb: 4 }}>
        <Scanner
          onScan={(result) => {
            setError(false);

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

      <JumpCodeSection />
    </>
  );
};

export default QrCodeScanner;
