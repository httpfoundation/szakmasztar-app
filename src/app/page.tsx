import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import heroImage from "@/assets/images/szakmasztar-2025-1200x800.webp";

const IndexPage = async () => {
  return (
    <Box>
      {/* Hero section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "500px" },
          marginX: { xs: -3, md: 0 }, // Kompenzálja a BaseLayout padding-ját mobilon
          marginY: { xs: -4, md: 0 }, // Kompenzálja a BaseLayout padding-ját mobilon
          overflow: "hidden",
          aspectRatio: { xs: "3/2", md: "auto" },
        }}
      >
        <Image
          src={heroImage}
          alt="Szakma Sztár Fesztivál 2025"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Overlay szöveg */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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
            Szakma Sztár Fesztivál 2025
          </Typography>
        </Box>
      </Box>

      {/* Tartalom */}
      <Container sx={{ py: 6 }}>
        <Typography variant="body1" paragraph>
          Üdvözöljük a Szakma Sztár Fesztivál 2025 hivatalos oldalán!
        </Typography>
      </Container>
    </Box>
  );
};

export default IndexPage;
