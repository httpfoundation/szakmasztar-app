// import { Stack, Typography } from "@mui/material";
// import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";

const HeroSection = () => {
  return (
    <>
      {/* <SectionContainer>
        <Stack
          direction="row"
          sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "primary.contrastText",
              textAlign: "center",
              fontSize: 18,
              textTransform: "uppercase",
              mx: "auto",
            }}
          >
            Fedezd fel a Szakma Sztár világát!
          </Typography>
        </Stack>
      </SectionContainer> */}

      <Starform />
    </>
  );
};

export default HeroSection;
