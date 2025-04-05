"use client";

import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { SkillCategoryFragment } from "@/actions/skills/skills.generated";
// import { SkillCategoryFragment } from "@/actions/skills/skills.generated";
import banyaszatImage from "@/assets/images/skill-categories/banyaszat.svg";
import elektronikaImage from "@/assets/images/skill-categories/elektronika.svg";
import epitoiparImage from "@/assets/images/skill-categories/epitoipar.svg";
import epuletgepeszetImage from "@/assets/images/skill-categories/epuletgepeszet.svg";
import faiparImage from "@/assets/images/skill-categories/faipar.svg";
import gepeszetImage from "@/assets/images/skill-categories/gepeszet.svg";
import informatikaImage from "@/assets/images/skill-categories/informatika.svg";
import jarmugyartasImage from "@/assets/images/skill-categories/jarmugyartas.svg";
import kereskedelemImage from "@/assets/images/skill-categories/kereskedelem.svg";
import kozlekedesImage from "@/assets/images/skill-categories/kozlekedes.svg";
import kreativImage from "@/assets/images/skill-categories/kreativ.svg";
import mindenImage from "@/assets/images/skill-categories/minden.svg";
import szepeszetImage from "@/assets/images/skill-categories/szepeszet.svg";
import turizmusImage from "@/assets/images/skill-categories/turizmus.svg";
import vegyiparImage from "@/assets/images/skill-categories/vegyipar.svg";
import { CustomImage } from "../common/CustomImage";

interface SkillCategoryCardProps {
  active: boolean;
  skillCategory: SkillCategoryFragment;
  onSelect(id: string): void;
}

const skillCategoryImages: Record<string, string> = {
  "MINDEN ÁGAZAT": mindenImage,
  "BÁNYÁSZAT ÉS KOHÁSZAT": banyaszatImage,
  "ELEKTRONIKA ÉS ELEKTROTECHNIKA": elektronikaImage,
  ÉPÍTŐIPAR: epitoiparImage,
  ÉPÜLETGÉPÉSZET: epuletgepeszetImage,
  "FA- ÉS BÚTORIPAR": faiparImage,
  GÉPÉSZET: gepeszetImage,
  "INFORMATIKA ÉS TÁVKÖZLÉS": informatikaImage,
  KERESKEDELEM: kereskedelemImage,
  "KÖZLEKEDÉS ÉS SZÁLLÍTMÁNYOZÁS": kozlekedesImage,
  KREATÍV: kreativImage,
  "SPECIALIZÁLT GÉP- ÉS JÁRMŰGYÁRTÁS": jarmugyartasImage,
  SZÉPÉSZET: szepeszetImage,
  "TURIZMUS-VENDÉGLÁTÁS": turizmusImage,
  VEGYIPAR: vegyiparImage,
};

const SkillCategoryCard: FC<SkillCategoryCardProps> = ({ active, skillCategory, onSelect }) => {
  return (
    <Button
      color="info"
      style={{ borderRadius: 0 }}
      onClick={() => onSelect(skillCategory.id)}
      sx={{
        p: 0,
        width: "100%",
        height: "100%",
        bgcolor: active ? "#F19A30" : "#CFC0CF",
        "&:hover,&:focus-visible": { bgcolor: active ? "#F1AF30" : "#F0E2F0" },
        pt: 2,
        flexDirection: "column",
        overflow: "hidden",
        ".MuiTouchRipple-child": {
          bgcolor: "#fff",
        },
      }}
    >
      <CustomImage
        src={skillCategoryImages[skillCategory.name.toUpperCase()]}
        alt="Skill Category Image"
        style={{ width: "73px", height: "73px" }}
        draggable={false}
      />

      <Stack
        sx={{
          mt: 1.5,
          background: "linear-gradient(to top right, #733638, #CE5542)",
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
          sx={{ fontSize: 14, textTransform: "uppercase" }}
        >
          {skillCategory.name.toUpperCase()}
        </Typography>
      </Stack>
    </Button>
  );
};

export default SkillCategoryCard;
