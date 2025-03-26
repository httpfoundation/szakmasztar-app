import {
  Map as MapIcon,
  QrCode as QrCodeIcon,
  QuestionMark,
  Work as WorkIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";

const ImageButtonSection = () => {
  return (
    <SectionContainer>
      <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, width: "100%" }}>
        <ImageButton href="/terkep" icon={<MapIcon />} text="Tájékozódj a térképen" />
        <ImageButton href="/qrkod" icon={<QrCodeIcon />} text="Olvasd be a QR-kódot" />
        <ImageButton
          href="/esemenyek/osztv-szktv-versenyek"
          icon={<WorkIcon />}
          text="Fedezd fel a szakmákat!"
        />
        <ImageButton href="/kerdoivek" icon={<QuestionMark />} text="Kérdőívek" />
      </Stack>
    </SectionContainer>
  );
};

export default ImageButtonSection;

