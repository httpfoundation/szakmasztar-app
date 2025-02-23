import { Box, Container } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import heroImage from "@/assets/images/szakmasztar-2025-1200x800.webp";
import FormattedContent from "@/components/FormattedContent";
import Hero from "@/components/Hero";

export const revalidate = 3600;

const IndexPage = async () => {
  const currentCompetition = await getCurrentCompetition();
  console.log(currentCompetition.article.lead);
  return (
    <Box>
      <Hero image={heroImage} alt={currentCompetition.name} title={currentCompetition.name} />

      <Container sx={{ py: 6 }}>
        <FormattedContent>{currentCompetition.article.lead}</FormattedContent>
      </Container>
    </Box>
  );
};

export default IndexPage;
