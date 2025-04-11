import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import KimLogo from "@/assets/images/kim-logo.png";
import MkikLogo from "@/assets/images/mkik-logo.png";
import NakLogo from "@/assets/images/nak-logo.png";
import SectionContainer from "@/components/layouts/SectionContainer";

const OrganizerInfo = () => {
  return (
    <SectionContainer sx={{ position: "relative", pt: 0, mb: 6 }}>
      <Divider sx={{ borderColor: "#ffffff30", mb: 6 }} />

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(3,1fr)",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 2,
          columnGap: 1,
          justifyItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "primary.contrastText",
            textAlign: "center",
            fontSize: 12,
            textTransform: "uppercase",
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
          }}
        >
          A rendezvény támogatója:
        </Typography>
        <Image
          src={MkikLogo}
          alt="Magyar Kerskedelmi és Iparkamara"
          height={80}
          objectFit="cover"
        />
        <Image src={NakLogo} alt="Nemzeti Agrárgazdasági Kamara" height={90} objectFit="cover" />
        <Image src={KimLogo} alt="Kereskedelmi és Iparkamara" height={90} objectFit="cover" />
      </Box>
    </SectionContainer>
  );
};

export default OrganizerInfo;
