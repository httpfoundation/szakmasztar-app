"use client";

import { FC } from "react";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import { Sector } from "@/app/szakmai-programok/page";

interface SkillCategoryCardProps {
  sector: Sector;
}

const SkillCategoryCard: FC<SkillCategoryCardProps> = ({ sector }) => {
  return (
    <Button
      color="info"
      style={{ borderRadius: "4px" }}
      href={`/szakmai-programok/agazatok/${sector.id}`}
      sx={{
        p: 0,
        width: "100%",
        height: "100%",
        bgcolor: "#d1b7cd",
        "&:hover,&:focus-visible": { bgcolor: "#e0cdde" },
        pt: 2,
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "primary.light",
        ".MuiTouchRipple-child": {
          bgcolor: "#fff",
        },
      }}
    >
      <Image src={sector.imageUrl} alt={sector.name} width={73} height={73} />

      <Stack
        sx={{
          mt: 1.5,
          background: "linear-gradient(to top right,rgb(46, 16, 46),rgb(79, 27, 79))",
          px: 1.5,
          py: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 13% 0%)",
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
          align="right"
          color="white"
          fontWeight={500}
          sx={{ fontSize: 10, textTransform: "uppercase" }}
        >
          {sector.name.toUpperCase()}
        </Typography>
      </Stack>
    </Button>
  );
};

export default SkillCategoryCard;
