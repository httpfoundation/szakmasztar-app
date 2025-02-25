import { StaticImageData } from "next/image";
import { Typography } from "@mui/material";
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
        {/* <FormattedContent color="white">{lead}</FormattedContent> */}
        <Typography variant="h2" sx={{ mb: 2, color: "primary.contrastText", textAlign: "center" }}>
          Üdvözlünk a fesztivál webalkalmazásában
        </Typography>
      </SectionContainer>
    </>
  );
};

export default HeroSection;
