// Feltételezve, hogy van ilyen kép
import { Map as MapIcon } from "@mui/icons-material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";

export default function MapSection() {
  return (
    <SectionContainer>
      <ImageButton
        href="/terkep"
        icon={<MapIcon />}
        text="Tájékozódj a térképen, hogy eljuss a téged érdeklő helyszínre !"
      />
    </SectionContainer>
  );
}
