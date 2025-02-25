import { QrCode as QrCodeIcon } from "@mui/icons-material";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";

export default function LocationInfo() {
  return (
    <SectionContainer>
      <ImageButton
        href="/qrkod"
        icon={<QrCodeIcon />}
        text="Olvasd be a QR kódot és tudj meg többet arról, amit látsz!"
      />
    </SectionContainer>
  );
}
