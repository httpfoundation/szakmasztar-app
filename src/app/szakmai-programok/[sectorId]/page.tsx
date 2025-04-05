import { notFound } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { getArticles } from "@/actions/articles/articles";
import { getCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import GradientTitle from "@/components/ui/GradientTitle";

interface SectorPageProps {
  params: Promise<{
    sectorId: string;
  }>;
}

const SectorPage = async ({ params }: SectorPageProps) => {
  const { sectorId } = await params;
  const category = await getCategory({ id: sectorId });
  if (!category) {
    notFound();
  }

  const events = await getArticles({ categoryId: sectorId });

  return (
    <>
      <GradientTitle>{category.name}</GradientTitle>
      <PageContainer>
        <Paper sx={{ p: 2, mb: 3, bgcolor: "#71376A55" }}>
          <Typography variant="h2" sx={{ fontSize: 20, color: "success.main", mb: 2 }}>
            WorldSkills Hungary
          </Typography>
          <Grid container spacing={1}>
            {events.map((event, eventIndex) => (
              <Grid item xs={12} md={6} key={eventIndex}>
                <Paper
                  sx={{
                    p: 2,
                    height: "100%",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ mt: 1, mb: 2 }}>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                    {event.slug && (
                      <Button
                        href={event.slug}
                        size="small"
                        startIcon={<InfoIcon />}
                        variant="contained"
                        color="success"
                      >
                        Információ
                      </Button>
                    )}
                    <Button
                      href={"/terkep/hungexpo"}
                      size="small"
                      startIcon={<LocationOnIcon />}
                      variant="outlined"
                      color="info"
                    >
                      TODO
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </PageContainer>
    </>
  );
};

export default SectorPage;

