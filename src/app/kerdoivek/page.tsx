import { Metadata } from "next";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import eredmenyorientaciosIcon from "@/assets/images/kerdoivek/icon-eredmenyorientacios.svg";
import iparagiIcon from "@/assets/images/kerdoivek/icon-iparagi.svg";
import kompetenciaIcon from "@/assets/images/kerdoivek/icon-kompetencia.svg";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kérdőívek",
};

const KerdoivekPage = () => {
  return (
    <>
      <YellowTitle>Kérdőívek</YellowTitle>

      <SectionContainer sx={{ pb: 4, pt: 2, position: "relative" }} maxWidth="sm">
        <Starform />

        <Typography sx={{ color: "white", mb: 2 }} variant="body2" align="justify">
          Fedezd fel, hogy melyik szakma illik hozzád leginkább! Az alábbi kérdőívek segítségével
          jobban megismerheted érdeklődési területeidet, erősségeidet és céljaidat.
        </Typography>

        <Stack direction="column" spacing={2}>
          <ImageButton
            href="/kerdoivek/eredmenyorientacios"
            sx={{ justifyContent: "flex-start" }}
            icon={
              <Image
                src={eredmenyorientaciosIcon}
                alt="Eredményorientációs kérdőív"
                style={{ height: "64px", width: "auto", padding: "4px" }}
              />
            }
            text={
              <>
                Eredményorientációs kérdőív
                <Typography variant="body2" sx={{ mt: 1, fontSize: 12 }}>
                  Mennyire fontos számodra a jó iskolai eredmények elérése?
                </Typography>
              </>
            }
          />

          <ImageButton
            href="/kerdoivek/iparagi-erdeklodes"
            sx={{ justifyContent: "flex-start" }}
            icon={
              <Image
                src={iparagiIcon}
                alt="Iparági érdeklődési kérdőív"
                style={{ height: "64px", width: "auto" }}
              />
            }
            text={
              <>
                Iparági érdeklődési kérdőív
                <Typography variant="body2" sx={{ mt: 1, fontSize: 12 }}>
                  Az alábbi feladatok segítenek abban, hogy tisztább képet kapj az érdeklődési
                  területeidről.
                </Typography>
              </>
            }
          />

          <ImageButton
            href="/kerdoivek/kompetencia"
            sx={{ justifyContent: "flex-start" }}
            icon={
              <Image
                src={kompetenciaIcon}
                alt="Kompetencia kérdőív"
                style={{ height: "64px", width: "auto" }}
              />
            }
            text={
              <>
                Kompetencia kérdőív
                <Typography variant="body2" sx={{ mt: 1, fontSize: 12 }}>
                  Ismerd meg erősségeidet, valamint azokat a területeket, amelyekben kiemelkedően
                  ügyes vagy.
                </Typography>
              </>
            }
          />
        </Stack>
      </SectionContainer>
    </>
  );
};

export default KerdoivekPage;
