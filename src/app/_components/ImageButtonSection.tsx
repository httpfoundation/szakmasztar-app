import {
  Category as CategoryIcon,
  Explore as ExploreIcon,
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
        interaktív térképen és a programlistából!
      </Typography>

      <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, width: "100%" }}>
        <ImageButton
          bgcolor="wshu.main"
          href="/terkep"
          icon={<ExploreIcon />}
          text="Tájékozódj a térképen!"
        />
        <ImageButton
          bgcolor="other.main"
          href="/qrkod"
          icon={<QrCodeIcon />}
          text="Olvasd be a QR-kódot!"
        />
        <ImageButton
          bgcolor="nak.main"
          href="/szakmai-programok/kategoriak"
          icon={<CategoryIcon sx={{ fontSize: 40 }} />}
          text="Válassz a programok közül!"
        />
        <ImageButton
          bgcolor="osztv.main"
          href="/szakmai-programok"
          icon={<WorkIcon sx={{ fontSize: 40 }} />}
          text="Válassz szakmát!"
        />
      </Stack>
    </SectionContainer>
  );
};

export default ImageButtonSection;
