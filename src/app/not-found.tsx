import { Metadata } from "next";
import { Stack, Typography } from "@mui/material";
import LinkButton from "@/components/common/LinkButton";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "404 Hiba",
};

const NotFoundPage = () => {
  return (
    <Stack
      sx={{
        width: "min(900px, 100%)",
        m: "auto",
        px: 2,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100%",
        flexGrow: 1,
      }}
      spacing={3}
    >
      <Starform />
      <SzakmaSztarSymbol />
      <Typography variant="h1" sx={{ color: "success.main" }}>
        Hiba!
      </Typography>
      <Typography variant="body1" color="primary.contrastText" textAlign="center">
        Sajnáljuk, de a keresett oldal nem található.
      </Typography>

      <LinkButton sx={{ mt: 2 }} direction="backward" href="/" color="success" variant="contained">
        Vissza a főoldalra
      </LinkButton>
    </Stack>
  );
};

export default NotFoundPage;
