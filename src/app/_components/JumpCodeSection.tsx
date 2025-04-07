"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Stack, TextField, Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";

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
        sx={{ width: "100%", bgcolor: "#D9D9D9", borderRadius: 999, mt: 2, mb: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/jumpcode/${jumpcode}`);
        }}
      >
        <TextField
          color="info"
          sx={{
            color: "white",
            width: "100%",
            "& fieldset": { border: "0 !important", outline: 0 },
          }}
          InputProps={{
            autoComplete: "off",
            sx: {
              color: "primary.main",
              opacity: 1,
              background: "#D9D9D9",
              "&::placeholder": { color: "red", opacity: 1 },
              borderTopLeftRadius: 999,
              borderBottomLeftRadius: 999,
              fontSize: 14,
              px: 0.9,
              fontWeight: 400,
            },
          }}
          placeholder="Add meg a stand számkódját"
          onChange={(e) => setJumpcode(e.target.value)}
          value={jumpcode}
          size="small"
        />
        <Button
          sx={{ flexShrink: 0, px: 4, borderRadius: 999, color: "primary.main", fontSize: 14 }}
          color="success"
        >
          Ugrás
        </Button>
      </Stack>
    </SectionContainer>
  );
};

export default JumpCodeSection;
