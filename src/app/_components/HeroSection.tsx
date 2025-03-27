import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import logo from "@/assets/images/logo.svg";
import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";

const HeroSection = () => {
  return (
    <>
      <SectionContainer>
        <Stack
          direction="row"
          sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}
        >
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ height: "70px", width: "auto" }}
          />

          <Typography
            variant="h2"
            sx={{
              color: "primary.contrastText",
              textAlign: "center",
              fontSize: 18,
              textTransform: "uppercase",
            }}
          >
            Üdvözlünk a fesztivál webalkalmazásában!
          </Typography>
        </Stack>
      </SectionContainer>

      <Starform />
    </>
  );
};

export default HeroSection;

