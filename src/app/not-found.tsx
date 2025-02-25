import { Metadata } from "next";
import { Stack, Typography } from "@mui/material";
import LinkButton from "@/components/common/LinkButton";

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
        py: 11,
        alignItems: "center",
      }}
      spacing={3}
    >
      <Typography variant="h3">404 Hiba</Typography>
      <Typography variant="body1" color="text.secondary">
        Sajnáljuk, de a keresett oldal nem található.
      </Typography>

      <LinkButton sx={{ mt: 2 }} direction="backward" href="/">
        Vissza a főoldalra
      </LinkButton>
    </Stack>
  );
};

export default NotFoundPage;
