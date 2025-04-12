"use client";

import { FC, useEffect, useState } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Button, Stack } from "@mui/material";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const InstallButton: FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      console.log("PWA telepítve");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async (): Promise<void> => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();

    try {
      //   const { outcome } = await deferredPrompt.userChoice;
      //   if (outcome === "accepted") {
      //     console.log("Felhasználó telepítette az alkalmazást");
      //   } else {
      //     console.log("Felhasználó elutasította a telepítést");
      //   }
    } catch (error) {
      console.error("Hiba a telepítési folyamatban:", error);
    }

    setDeferredPrompt(null);
  };

  if (!isInstallable) {
    return null;
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ width: "100%", pb: 2, mx: "auto" }}
    >
      <Button
        onClick={handleInstallClick}
        variant="contained"
        color="primary"
        startIcon={<GetAppIcon />}
        sx={{
          width: "80%",
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          boxShadow: 2,
          "&:hover": {
            boxShadow: 4,
          },
        }}
        aria-label="Alkalmazás telepítése"
      >
        Az alkalmazás telepítése
      </Button>
    </Stack>
  );
};

export default InstallButton;
