"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Stack, Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";
import CustomTextField from "@/components/ui/CustomTextField";

const JumpCodeSection = () => {
  const router = useRouter();
  const [jumpcode, setJumpcode] = useState("");

  return (
    <SectionContainer padding={0}>
      <Typography sx={{ color: "white", fontSize: 14, mb: 1, textAlign: "center" }}>
        Ha nem tudod beolvasni a QR-kódot, írd be helyette a stand számkódját!
      </Typography>
      <Stack
        component="form"
        direction="row"
        spacing={0}
        sx={{ width: "70%", bgcolor: "#D9D9D9", borderRadius: 999, mt: 2, mb: 2, mx: "auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/jumpcode/${jumpcode}`);
        }}
      >
        <CustomTextField
          value={jumpcode}
          onChange={(e) => setJumpcode(e.target.value)}
          placeholder="Számkód"
        />
        <Button
          sx={{ flexShrink: 0, px: 4, borderRadius: 999, color: "primary.main", fontSize: 14 }}
          color="success"
          type="submit"
        >
          Ugrás
        </Button>
      </Stack>
    </SectionContainer>
  );
};

export default JumpCodeSection;
