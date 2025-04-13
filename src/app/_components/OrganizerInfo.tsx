import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import KimLogo from "@/assets/images/kim-logo.png";
import MkikLogo from "@/assets/images/mkik-logo.png";
import NakLogo from "@/assets/images/nak-logo.png";
import SectionContainer from "@/components/layouts/SectionContainer";

const OrganizerInfo = () => {
  return (
    <SectionContainer sx={{ position: "relative", pt: 0, mb: 4 }}>
      <Divider sx={{ borderColor: "#ffffff30", mb: 3 }} />

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 2,
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "primary.contrastText",
            textAlign: "center",
            fontSize: 12,
            textTransform: "uppercase",
            gridColumn: "1 / 2",
            gridRow: "1 / 2",
          }}
        >
          A versenyek főszervezője:
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "primary.contrastText",
            textAlign: "center",
            fontSize: 12,
            textTransform: "uppercase",
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
          }}
        >
          Együttműködő partner:
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "primary.contrastText",
            textAlign: "center",
            fontSize: 12,
            textTransform: "uppercase",
            gridColumn: "3 / 4",
            gridRow: "1 / 2",
          }}
        >
          A rendezvény támogatója:
        </Typography>

        <Box
          sx={{
            gridColumn: "1 / 2",
            gridRow: "2 / 3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={MkikLogo}
            alt="Magyar Kerskedelmi és Iparkamara"
            width={100}
            objectFit="cover"
          />
        </Box>
        <Box
          sx={{
            gridColumn: "2 / 3",
            gridRow: "2 / 3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={NakLogo} alt="Nemzeti Agrárgazdasági Kamara" width={100} objectFit="cover" />
        </Box>
        <Box
          sx={{
            gridColumn: "3 / 4",
            gridRow: "2 / 3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={KimLogo} alt="Kereskedelmi és Iparkamara" width={100} objectFit="cover" />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default OrganizerInfo;
