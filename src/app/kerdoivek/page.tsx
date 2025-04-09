import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const dynamic = "force-static";

const KerdoivekPage = () => {
  return (
    <PageContainer>
      <PageTitle>Kérdőívek</PageTitle>
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
    </PageContainer>
  );
};

export default KerdoivekPage;
