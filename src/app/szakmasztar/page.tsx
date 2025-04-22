import { Metadata } from "next";
import { Divider, Typography } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import FormattedContent from "@/components/FormattedContent";
import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Szakma Sztár Fesztivál",
};

const SzakmasztarPage = async () => {
  const currentCompetition = await getCurrentCompetition();

  return (
    <>
      <YellowTitle>Szakma Sztár Fesztivál</YellowTitle>
      <SectionContainer
        sx={{
          position: "relative",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          pb: 6,
        }}
      >
        <Starform style={{ top: "unset", bottom: 0 }} />
        <SzakmaSztarSymbol />

        <FormattedContent fontWeight={600}>{currentCompetition.article.content}</FormattedContent>

        <Divider sx={{ borderColor: "#ffffff50" }} />

        <Typography component="h2" id="mkik" variant="h3">
          Magyar Kereskedelmi és Iparkamara
        </Typography>
        <FormattedContent fontWeight={500}>
          A Magyar Kereskedelmi és Iparkamara a hazai gazdaság és szakmai képzés kiemelt támogatója.
          Célja, hogy elősegítse a szakképzés fejlesztését és népszerűsítse a szakmai versenyeket.
          Az eseményekkel a tehetséges fiatal szakemberek fejlődését és elismerését kívánja
          előmozdítani.
        </FormattedContent>

        <Typography variant="h3">Nemzeti Agrárkamara</Typography>
        <FormattedContent fontWeight={500}>
          A Nemzeti Agrárkamara a magyar agrárium és szakképzés meghatározó szereplője. Célja, hogy
          támogassa a mezőgazdasági szakemberek képzését és népszerűsítse a szakmai versenyeket. Az
          eseményekkel hozzájárul a fiatal tehetségek fejlődéséhez és elismeréséhez.
        </FormattedContent>
      </SectionContainer>
    </>
  );
};

export default SzakmasztarPage;
