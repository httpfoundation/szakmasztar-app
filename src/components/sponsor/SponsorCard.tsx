import { FC } from "react";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import { SponsorFragment } from "@/actions/sponsors/sponsors.generated";

interface SponsorCardProps {
  sponsor: SponsorFragment;
}

const SponsorCard: FC<SponsorCardProps> = ({ sponsor }) => {
  return (
    <Button
      target={"_blank"}
      href={sponsor.homepageUrl || "#"}
      sx={{
        p: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "primary.light",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        bgcolor: "#451F48",
      }}
      style={{ borderRadius: "4px" }}
      disabled={!sponsor.homepageUrl}
    >
      <Stack
        alignItems="center"
        sx={{
          background: "primary.light",
          px: 2,
          py: 1.5,
          position: "relative",
          height: "100%",
          width: "100%",
        }}
        spacing={1.5}
      >
        <Stack
          sx={{
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            height: "100px",
            bgcolor: "primary.light",
          }}
        />
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "120px",
            bgcolor: "#fff",
            aspectRatio: "1 / 1",
            borderRadius: "999px",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={sponsor.image?.url ?? ""}
            alt={sponsor.name}
            style={{ height: "85%", width: "85%", objectFit: "contain" }}
            draggable={false}
            width={300}
            height={300}
          />
        </Stack>

        <Typography
          variant="body2"
          textAlign="center"
          color="white"
          fontWeight={500}
          sx={{ width: "100%", fontSize: 13, textTransform: "capitalize" }}
        >
          {sponsor.name}
        </Typography>
      </Stack>
    </Button>
  );
};

export default SponsorCard;
