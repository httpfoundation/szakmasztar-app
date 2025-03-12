import { Stack, Typography } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import FormattedContent from "@/components/FormattedContent";
import SectionContainer from "@/components/layouts/SectionContainer";

const SzakmasztarPage = async () => {
  const currentCompetition = await getCurrentCompetition();

  return (
    <SectionContainer>
      <Stack sx={{ width: "100%", gap: 2 }}>
        <Typography variant="h1">{currentCompetition.name}</Typography>
        <FormattedContent>{currentCompetition.article.lead}</FormattedContent>
        <FormattedContent>{currentCompetition.article.content}</FormattedContent>
      </Stack>
    </SectionContainer>
  );
};

export default SzakmasztarPage;

