import { Divider, Typography } from "@mui/material";
import PageContainer from "@/components/layouts/PageContainer";
import SectionContainer from "@/components/layouts/SectionContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import LinkChip from "@/components/ui/LinkChip";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";
import GameQuestionnaire from "./GameQuestionnaire";

const GamePage = () => {
  return (
    <>
      <YellowTitle>Játssz és nyerj!</YellowTitle>
      <GameQuestionnaire />
    </>
  );
};

export default GamePage;
