import { Metadata } from "next";
import { Typography } from "@mui/material";
import FormattedContent from "@/components/FormattedContent";
import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Szakma Sztár Fesztivál",
};

const SzakmasztarPage = () => {
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
        <Starform />
        <SzakmaSztarSymbol />

        <Typography variant="h3">
          Több, mint egy verseny - Fedezd fel a szakmák világát a XVIII. Szakma Sztár Fesztiválon!
        </Typography>

        <FormattedContent fontWeight={700} variant="body1">
          Több mint 50 szakmában közel kétszáz diák méri össze tudását a XVIII. Szakma Sztár
          Fesztiválon április 28-án és 29-én Budapesten, a további programok között pedig kiemelt
          figyelmet kap az interaktivitás és a testközelből megtapasztalható élmények.
        </FormattedContent>

        <FormattedContent fontWeight={700} variant="body1">
          {`A jelige: <i>„Tanulj szakmát és legyél Te a szakmád sztárja!”</i>`}
        </FormattedContent>

        <FormattedContent fontWeight={500}>
          Tehetség, elhivatottság, precizitás és kreativitás - ilyen tulajdonságokra egészen
          biztosan, hogy szüksége lesz azoknak a fiataloknak, akik idén is részt vesznek a Magyar
          Kereskedelmi és Iparkamara által szervezett ingyenes XVIII. Szakma Sztár Fesztiválon.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          A Szakma Sztár Fesztivállal a szervezők célja idén sem változott, szeretnék még magasabb
          szintre emelni a szakképzés és a szakmaválasztás népszerűsítését, emellett támogatni
          kívánják a pályaválasztás előtt álló fiatalokat, iránymutatást adni a felnövekő generáció
          számára, valamint hozzájárulni a szakképzésben kiemelkedően tehetséges diákok szakmai
          fejlődéséhez.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          A Szakma Sztár Fesztivál amellett, hogy az év legnagyobb pályaorientációs eseménye, egy
          izgalmas versenysorozat döntője és egy élményalapú kiállítás is a különböző szakmák
          bemutatkozásával.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          A Szakma Kiváló Tanulója Verseny (SZKTV) és az Országos Szakmai Tanulmányi Verseny (OSZTV)
          országos döntőin több mint 50 szakmában közel 200 tanuló verseng a legjobbnak járó
          elismerésért, amelyet egy országos központi előválogató verseny és egy válogató előzött
          meg. A Szakma Sztár Fesztivál döntőire azon legkiválóbb fiatal szakemberek jutnak el, akik
          amellett, hogy saját dicsőségükért küzdenek, a gyakorlatigényes szakmák ‒ beleértve a
          magasabban kvalifikált, érettségire épülő szakmákat is ‒ társadalmi presztízsének és
          vonzerejének növeléséért, a szakmatanulás népszerűsítéséért is sokat tesznek.
        </FormattedContent>
        <FormattedContent
          fontWeight={500}
        >{`Nem véletlen a szlogen, ami megjelenik a Szakma Sztár Fesztiválon: <strong><i>„Tanulj szakmát és legyél Te a szakmád sztárja!”</i></strong>`}</FormattedContent>

        <FormattedContent fontWeight={500} sx={{ mt: 2 }}>
          A fesztivál együttműködő partnereként, a Nemzeti Agrárgazdasági Kamara szervezésében 21
          agrár szakma bemutatóit tekinthetik meg a látogatók. Az agrárkamara szakmabemutatókkal
          lehetőséget ad arra, hogy a Szakma Sztár Fesztivál keretében a pályaválasztás előtt álló
          diákok a mezőgazdasági és élelmiszeripari szakmákat is interaktív módon megismerhessék.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          A NAK kiemelt célja továbbra is az agrárszakmák népszerűsítése és az ágazati szakképzések
          megismertetése a fiatalokkal.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          Az MKIK gondozásában működő WorldSkills Hungary Program idén 22 versenyszámmal jelenik meg
          a fesztiválon. A szakmai programokon bemutatkoznak azon tehetséges fiatal szakemberek,
          akik az országot képviselik majd a szeptemberi Európa-bajnokságon, a EuroSkills Herning
          2025 nemzetközi versenyen. A látogatók autószerelő, festő, díszítőfestő, informatikai
          rendszerüzemeltető, ipari robotika, szoftverfejlesztő, valamint webfejlesztő szakmákban
          bepillantást nyerhetnek a WorldSkills Shanghai 2026 Nemzeti Döntőibe. Mindezek mellett
          asztalos szakmában Junior Skills döntő is megrendezésre kerül.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          A rendezvény fókuszában az interaktivitás és az élményalapú tapasztalatszerzés áll, hiszen
          a több mint tízezer látogató többsége pályaválasztás előtt álló általános iskolás. A
          Szakma Sztár Fesztivál webalkalmazásának köszönhetően a résztvevők idén már
          okoseszközeikkel könnyedén tájékozódhatnak a programokról, az esemény legfontosabb
          információiról, valamint a szakmai versenyek részleteiről. A személyes jelenlét és a
          webalkalmazás nyújtotta új lehetőségek együttesen járulnak hozzá a szakmák világának
          sokszínű, élményalapú megismeréséhez, amelyet a kiváló szakemberek látványos bemutatói
          tesznek még izgalmasabbá.
        </FormattedContent>
        <FormattedContent fontWeight={500}>
          Az esemény támogatóiként megjelennek olyan gazdálkodó szervezetek, akik a duális képzés
          keretében maguk is aktív szereplői a szakképzésnek.
        </FormattedContent>
      </SectionContainer>
    </>
  );
};

export default SzakmasztarPage;
