import Image, { StaticImageData } from "next/image";
import { Stack, Typography } from "@mui/material";
import logo from "@/assets/images/logo.svg";
import SectionContainer from "@/components/layouts/SectionContainer";
import HeroImage from "./HeroImage";

interface HeroSectionProps {
  image: string | StaticImageData;
  alt: string;
  title: string;
  lead: string;
}

const HeroSection = ({ image, alt, title }: HeroSectionProps) => {
  return (
    <>
      <HeroImage image={image} alt={alt} title={title} />

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
    </>
  );
};

export default HeroSection;

