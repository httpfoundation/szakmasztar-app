import { Box, Container, Typography } from "@mui/material";
import HeroImage from "../../_components/HeroImage";

export const revalidate = 7200;

export const metadata = {
  title: "Szakma Sztár Fesztivál 2026",
  description: "A Szakma Sztár Fesztivál webalkalmazása",
};

const HamarosanPage = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "primary.main", pb: { xs: 6, md: 10 } }}>
      <HeroImage alt="Szakma Sztár Fesztivál 2025" title="Szakma Sztár Fesztivál 2025" hideLink />
      <Container maxWidth="md" sx={{ mt: { xs: 3, md: 7 } }}>
        {/* Intro text */}
        <Typography
          variant="body1"
          sx={{
            color: "primary.contrastText",
            fontSize: { xs: 16, md: 19 },
            lineHeight: 1.85,
            textAlign: "justify",
            fontWeight: 300,
            px: { xs: 1, md: 0 },
          }}
        >
          Az idei évben ismét a rendezvény webalkalmazásával tesszük színesebbé a fesztivált,
          melynek köszönhetően okoseszközöddel is könnyedén tájékozódhatsz a programokról, az
          esemény legfontosabb információiról, valamint a szakmai versenyek részleteiről.
        </Typography>

        {/* Highlighted quote */}
        <Box
          sx={{
            borderLeft: "4px solid",
            borderColor: "#FFDF12",
            pl: { xs: 2.5, md: 4 },
            py: { xs: 1, md: 1.5 },
            my: { xs: 3, md: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.contrastText",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              lineHeight: 1.6,
              fontSize: { xs: 16, md: 17 },
            }}
          >
            Keresd a rendezvény ideje alatt kihelyezett információs plakátokat és kapcsolódj a
            fesztiválhoz!
          </Typography>
        </Box>

        {/* Second paragraph */}
        <Typography
          variant="body1"
          sx={{
            color: "primary.contrastText",
            fontSize: { xs: 16, md: 19 },
            lineHeight: 1.85,
            textAlign: "justify",
            fontWeight: 300,
            px: { xs: 1, md: 0 },
          }}
        >
          A személyes jelenlét és a webapplikáció nyújtotta új lehetőségek együttesen járulnak hozzá
          a szakmák világának sokszínű, élményalapú megismeréséhez, amelyet a kiváló szakemberek
          látványos bemutatói tesznek még izgalmasabbá.
        </Typography>

        {/* CTA banner */}
        <Box
          sx={{
            mt: { xs: 3, md: 7 },
            py: { xs: 3.5, md: 4 },
            px: { xs: 3, md: 4 },
            textAlign: "center",
            bgcolor: "rgba(255,255,255,0.06)",
            borderLeft: "3px solid rgba(255,255,255,0.15)",
            "& a": {
              color: "#FFDF12",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid rgba(244,176,42,0.4)",
              transition: "border-color 0.2s",
              "&:hover": {
                borderColor: "#FFDF12",
              },
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.92)",
              fontSize: { xs: 16, md: 17 },
              fontWeight: 400,
              mb: 3,
            }}
          >
            Az alkalmazás várhatóan{" "}
            <Box component="span" sx={{ fontWeight: 700, color: "#FFDF12" }}>
              március 20-tól
            </Box>{" "}
            lesz elérhető ezen a címen:
            <br />
            <Box component="span" sx={{ fontWeight: 700, color: "#FFDF12" }}>
              <a href="https://app.szakmasztar.hu">app.szakmasztar.hu</a>
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.78)",
              fontSize: { xs: 16, md: 17 },
              fontWeight: 300,
            }}
          >
            Addig is tájékozódj a <a href="https://szakmasztar.hu/">Szakma Sztár weblapján</a> vagy{" "}
            <a href="https://www.facebook.com/szakmasztarfesztival">Facebook oldalán</a>!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HamarosanPage;
