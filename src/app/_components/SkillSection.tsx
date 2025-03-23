import { Work as WorkIcon } from "@mui/icons-material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";

export default function SkillSection() {
  return (
    <SectionContainer>
      <ImageButton
        href="/esemenyek/osztv-szktv-versenyek"
        icon={<WorkIcon />}
        text="Fedezd fel a szakmákat!"
      />
    </SectionContainer>
  );
}
