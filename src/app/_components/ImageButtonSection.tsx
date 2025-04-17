import {
  Category as CategoryIcon,
  Map as MapIcon,
  QrCode as QrCodeIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";

const ImageButtonSection = () => {
  return (
    <SectionContainer sx={{ pt: 2 }}>
      <Typography variant="body2" sx={{ textAlign: "center", mb: 2, width: "100%" }}>
        A standokon kihelyezett QR-kód beolvasásával megtudhatod mi zajlik ott. Tájékozódhatsz az
        interaktív térképen és a programlistából is választhatsz!
      </Typography>

      <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, width: "100%" }}>
        <ImageButton href="/terkep" icon={<MapIcon />} text="Tájékozódj a térképen!" />
        <ImageButton href="/qrkod" icon={<QrCodeIcon />} text="Olvasd be a QR-kódot!" />
        <ImageButton
          href="/szakmai-programok/kategoriak"
          icon={<CategoryIcon sx={{ fontSize: 40 }} />}
          text="Válassz a programok közül!"
        />
        <ImageButton
          href="/szakmai-programok"
          icon={<WorkIcon sx={{ fontSize: 40 }} />}
          text="Válassz szakmát!"
        />
      </Stack>
    </SectionContainer>
  );
};

export default ImageButtonSection;
