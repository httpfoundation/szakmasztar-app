import React from "react";
import Link from "next/link";
import {
  Map as MapIcon,
  QrCode as QrCodeIcon,
  Quiz as QuizIcon,
  SvgIconComponent,
  Work as WorkIcon,
} from "@mui/icons-material";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import GameIcon from "@/assets/images/game-icon.svg";
import HexButtonsBgImg from "@/assets/images/hero/hex-buttons-bg-alt-2.png";
import SectionContainer from "@/components/layouts/SectionContainer";
import { szakmaSztarMustard } from "@/themes/theme";

function HexagonButton({
  icon: Icon,
  label,
  href,
  sx,
  direction = "left",
}: {
  icon: SvgIconComponent;
  label: string;
  href: string;
  sx?: SxProps<Theme>;
  direction: "left" | "right";
}) {
  // offset = (height / 2) * tan(30°) = (100 / 2) * tan(30°) = 50 * 0.577 = 28.85
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: "100px",
        width: "calc(100% + 28.85px)",
        ml: direction === "right" ? "-28.85px" : "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: direction === "left" ? "row" : "row-reverse",
        px: {
          xs: 1.5,
          md: 2,
        },
        gap: 0.25,
        clipPath:
          direction === "left"
            ? "polygon(0% 0%, calc(100% - 28.85px) 0%, 100% 50%, calc(100% - 28.85px) 100%, 0% 100%, 0% 0%)"
            : "polygon(100% 0%, 100% 100%, 28.85px 100%, 0% 50%, 28.85px 0%, 100% 0%)",
        ...sx,
      }}
      component={Link}
      href={href}
    >
      <Typography
        sx={{
          flex: 1,
          fontWeight: "700",
          fontSize: { xs: 14, md: 18 },
          color: "primary.contrastText",
        }}
      >
        {label}
      </Typography>
      <Icon sx={{ fontSize: { xs: 32, md: 40 }, color: "primary.contrastText" }} />
    </Box>
  );
}

function CenterHexagonButton({
  label,
  href,
  sx,
}: {
  label: string;
  href: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={{
        backgroundColor: szakmaSztarMustard,
        color: "primary.dark",
        fontWeight: "700",
        width: "100%",
        aspectRatio: "1.1547 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 0.5,
        textAlign: "center",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%, 25% 0%, 100% 0%)",
        alignSelf: "center",
        justifySelf: "center",
        ...sx,
      }}
      component={Link}
      href={href}
    >
      <Box component="img" src={GameIcon.src} alt="" sx={{ width: { xs: 32, md: 46 } }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: { xs: 14, md: 18 },
          px: "20%",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function HexagonMenu() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gridTemplateRows: "repeat(4, 43px)",
        gap: "16px",
        my: "24px",
      }}
    >
      <img
        src={HexButtonsBgImg.src}
        alt=""
        style={{
          position: "absolute",
          top: "-24px",
          height: "calc(100% + 48px)",
          objectFit: "fill",
          left: "clamp(-162px, calc(0.315 * min(100vw, 900px) - 268px), 6px)",
          aspectRatio: "1006/832",
        }}
      />
      <img
        src={HexButtonsBgImg.src}
        alt=""
        style={{
          position: "absolute",
          top: "-24px",
          height: "calc(100% + 48px)",
          objectFit: "fill",
          transform: "scaleX(-1)",
          right: "clamp(-162px, calc(0.315 * min(100vw, 900px) - 268px), 6px)",
          aspectRatio: "1006/832",
        }}
      />
      <HexagonButton
        icon={MapIcon}
        label="Tájékozódj a térképen"
        href="/terkep"
        sx={{ gridColumn: 1, gridRow: "1 / 3" }}
        direction="left"
      />
      <HexagonButton
        icon={QrCodeIcon}
        label="Olvasd be a QR kódot"
        href="/qrkod"
        sx={{ gridColumn: 3, gridRow: "1 / 3" }}
        direction="right"
      />
      <HexagonButton
        icon={WorkIcon}
        label="Fedezd fel a szakmákat"
        href="/szakmai-programok"
        sx={{ gridColumn: 1, gridRow: "3 / 5" }}
        direction="left"
      />
      <HexagonButton
        icon={QuizIcon}
        label="Kérdőívek"
        href="/kerdoivek"
        sx={{ gridColumn: 3, gridRow: "3 / 5" }}
        direction="right"
      />
      <CenterHexagonButton
        label="Játssz és nyerj!"
        href="/jatssz-es-nyerj"
        sx={{ gridColumn: 2, gridRow: "2 / 4" }}
      />
    </Box>
  );
}

const ImageButtonSection = () => {
  return (
    <>
      <SectionContainer
        sx={{
          pt: 2,
          pl: { xs: "0 !important", md: "24px !important" },
          pr: { xs: "0 !important", md: "24px !important" },
        }}
      >
        <HexagonMenu />
        {/* <Typography variant="body2" sx={{ textAlign: "center", mb: 2, width: "100%" }}>
          A standokon kihelyezett QR-kód beolvasásával megtudhatod mi zajlik ott. Tájékozódhatsz az
          interaktív térképen és a programlistából!
        </Typography> */}
      </SectionContainer>
    </>
  );
};

export default ImageButtonSection;
