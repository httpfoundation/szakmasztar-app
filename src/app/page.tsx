import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import heroImage from "@/assets/images/szakmasztar-2025-1200x800.webp";
import FormattedContent from "@/components/FormattedContent";

export const revalidate = 3600;

const IndexPage = async () => {
  const currentCompetition = await getCurrentCompetition();

  return (
    <Box>
      {/* Hero section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "500px" },
          marginX: { xs: -3, md: 0 },
          marginY: { xs: -4, md: 0 },
          overflow: "hidden",
          aspectRatio: { xs: "3/2", md: "auto" },
        }}
      >
        <Image
          src={heroImage}
          alt={currentCompetition.name}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Overlay text */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              px: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {currentCompetition.name}
          </Typography>
        </Box>
      </Box>

      <Container sx={{ py: 6 }}>
        <FormattedContent>{currentCompetition.article.lead}</FormattedContent>
      </Container>
    </Box>
  );
};

export default IndexPage;

