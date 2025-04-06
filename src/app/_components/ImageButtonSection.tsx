import {
  Map as MapIcon,
  QrCode as QrCodeIcon,
  QuestionMark,
  Work as WorkIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import FormattedContent from "@/components/FormattedContent";
import SectionContainer from "@/components/layouts/SectionContainer";

const ImageButtonSection = () => {
  return (
    <SectionContainer>
      <FormattedContent sx={{ textAlign: "center", mb: 2 }}>
        A standokon kihelyezett QR-kód beolvasásával megtudhatod mi zajlik ott. Tájékozódhatsz az
        interaktív térképen és a programlistából is választhatsz!
      </FormattedContent>
      <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, width: "100%" }}>
        <ImageButton href="/terkep" icon={<MapIcon />} text="Tájékozódj a térképen!" />
        <ImageButton href="/qrkod" icon={<QrCodeIcon />} text="Olvasd be a QR-kódot!" />
        <ImageButton
          href="/szakmai-programok"
          icon={<WorkIcon />}
          text="Válassz a programok közül!"
        />
        <ImageButton href="/kerdoivek" icon={<QuestionMark />} text="Kérdőívek" />
      </Stack>
    </SectionContainer>
  );
};

export default ImageButtonSection;
