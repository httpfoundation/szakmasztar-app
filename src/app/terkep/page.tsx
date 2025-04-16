import { ReactNode } from "react";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import aPavilonIcon from "@/assets/images/maps/a-pavilon-icon.svg";
import dPavilonIcon from "@/assets/images/maps/d-pavilon-icon.svg";
import hungexpoMapIcon from "@/assets/images/maps/hungexpo-icon.svg";
import ImageButton from "@/components/common/ImageButton";
import PageContainer from "@/components/layouts/PageContainer";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

const MapPage = async () => {
  return (
    <>
      <YellowTitle>Térkép</YellowTitle>

      <PageContainer>
        <Stack direction="column" spacing={2}>
          <MapButton
            href="/terkep/hungexpo"
            icon={<Image src={hungexpoMapIcon} alt="Hungexpo" width={42} height={42} />}
            title="HUNGEXPO"
            subtitle="Áttekintő tékép"
          />

          <MapButton
            href="/terkep/a-pavilon"
            icon={<Image src={aPavilonIcon} alt="Hungexpo" width={42} height={42} />}
            title="A pavilon"
            subtitle="Szakmai Tanulmányi versenyek és WorldSkills Hungary versenyek"
          />

          <MapButton
            href="/terkep/d-pavilon"
            icon={<Image src={dPavilonIcon} alt="Hungexpo" width={42} height={42} />}
            title="D pavilon térképe"
            subtitle="Az agrár terület szakmai tanulmányi versenyei"
          />
        </Stack>
      </PageContainer>
    </>
  );
};

const MapButton = ({
  subtitle,
  title,
  icon,
  href,
  center = false,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  href: string;
  center?: boolean;
}) => {
  return (
    <ImageButton
      iconSx={{ ml: center ? "-36px" : 0 }}
      href={href}
      icon={icon}
      sx={{ justifyContent: center ? "center" : "flex-start", py: 2 }}
      text={
        <Typography component="div" sx={{ fontSize: 17, fontWeight: 700, width: "fit-content" }}>
          {title}
          <Typography
            component="div"
            variant="body1"
            sx={{ fontSize: 13, fontWeight: 500, width: "fit-content", mt: 0.5 }}
          >
            {subtitle}
          </Typography>
        </Typography>
      }
    />
  );
};

export default MapPage;
