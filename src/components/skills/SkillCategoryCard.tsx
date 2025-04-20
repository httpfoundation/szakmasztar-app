"use client";

import { FC } from "react";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import { Sector } from "@/app/szakmai-programok/page";

interface SkillCategoryCardProps {
  sector: Sector;
  bgcolor?: string;
}

const SkillCategoryCard: FC<SkillCategoryCardProps> = ({ sector, bgcolor = "primary.light" }) => {
  return (
    <Button
      color="info"
      style={{ borderRadius: "4px" }}
      href={`/szakmai-programok/agazatok/${sector.id}`}
      sx={{
        p: 0,
        width: "100%",
        height: "100%",
        bgcolor,
        "&:hover,&:focus-visible": { bgcolor },
        pt: 2,
        flexDirection: "column",
        overflow: "hidden",
        ".MuiTouchRipple-child": {
          bgcolor: "#fff",
        },
      }}
    >
      <Image
        src={sector.imageUrl}
        alt={sector.name}
        width={73}
        height={73}
        style={{ filter: "brightness(2000%)" }}
      />

      <Stack
        sx={{
          mt: 1.5,
          bgcolor: "#D9D9D9",
          px: 1.5,
          py: 0.75,
          // clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 13% 0%)",
          mb: "-1px",
          mr: "-1px",
          pl: "13%",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          align="center"
          color="white"
          fontWeight={500}
          sx={{ fontSize: 11, textTransform: "uppercase", color: "primary.main", fontWeight: 600 }}
        >
          {sector.name.toUpperCase()}
        </Typography>
      </Stack>
    </Button>
  );
};

export default SkillCategoryCard;
