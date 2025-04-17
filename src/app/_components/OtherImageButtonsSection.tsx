import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QuizIcon from "@mui/icons-material/Quiz";
import { Divider, Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";

const OtherImageButtonsSection = () => {
  return (
    <SectionContainer sx={{ pt: 0 }}>
      <Divider sx={{ borderColor: "#ffffff30", mb: 2 }} />

      <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, width: "100%" }}>
        <ImageButton href="/kerdoivek" icon={<QuizIcon />} text="Melyik szakma illik hozzád?" />
        <ImageButton href="/szponzorok" icon={<AccountBalanceIcon />} text="Szakmai támogatók" />
      </Stack>
    </SectionContainer>
  );
};

export default OtherImageButtonsSection;
