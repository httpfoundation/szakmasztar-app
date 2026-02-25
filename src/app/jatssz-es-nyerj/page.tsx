import { Divider, Typography } from "@mui/material";
import PageContainer from "@/components/layouts/PageContainer";
import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";
import GameQuestionnaire from "./GameQuestionnaire";

const GamePage = () => {
  return (
    <>
      <YellowTitle>Játssz és nyerj!</YellowTitle>
      <SectionContainer sx={{ bgcolor: "#00000020" }}>
        <Typography
          variant="body2"
          sx={{ color: "primary.contrastText", lineHeight: "1.5" }}
          align="justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates officiis,
          facilis, odit fuga velit dolores possimus quod ducimus ipsum doloribus illo nulla quasi
          fugiat magni labore neque, voluptatum perspiciatis?
        </Typography>
      </SectionContainer>

      <Divider
        sx={{
          height: "1px",
          border: "0",
          width: "100%",
          bgcolor: "#fff1",
        }}
      />

      <PageContainer sx={{ position: "relative", pb: 4 }}>
        <Starform />
        <GameQuestionnaire />
      </PageContainer>
    </>
  );
};

export default GamePage;
