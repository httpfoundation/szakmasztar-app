import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import logo from "@/assets/images/logo.svg";
import starform from "@/assets/images/starform.svg";
import SectionContainer from "@/components/layouts/SectionContainer";

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

      <Image
        src={starform}
        alt=""
        role="presentation"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          pointerEvents: "none",
          width: "592px",
          height: "auto",
        }}
      />
    </>
  );
};

export default HeroSection;

