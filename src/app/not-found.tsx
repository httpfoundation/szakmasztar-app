import { Metadata } from "next";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Stack, Typography } from "@mui/material";

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

      <Link href="/">
        <Button sx={{ mt: 2 }} startIcon={<ArrowBackIcon />}>
          Vissza a főoldalra
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFoundPage;

