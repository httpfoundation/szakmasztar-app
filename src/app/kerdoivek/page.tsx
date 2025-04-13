import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";
import GradientTitle from "@/components/ui/GradientTitle";

export const dynamic = "force-static";

const KerdoivekPage = () => {
  return (
    <>
      <GradientTitle>Kérdőívek</GradientTitle>
      <SectionContainer sx={{ py: 4, px: 2 }}>
        <Stack direction="column" spacing={2}>
          <ImageButton
            href="/kerdoivek/eredmenyorientacios"
            icon={<QuestionMarkIcon />}
            text="Eredményorientációs kérdőív"
          />
          <ImageButton
            href="/kerdoivek/iparagi-erdeklodes"
            icon={<QuestionMarkIcon />}
            text="Iparági érdeklődési kérdőív"
          />
          <ImageButton
            href="/kerdoivek/kompetencia"
            icon={<QuestionMarkIcon />}
            text="Kompetencia kérdőív"
          />
        </Stack>
      </SectionContainer>
    </>
  );
};

export default KerdoivekPage;
