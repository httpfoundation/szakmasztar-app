"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Stack, TextField, Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";

const JumpCodeSection = () => {
  const router = useRouter();
  const [jumpcode, setJumpcode] = useState("");

  return (
    <SectionContainer>
      <Typography sx={{ color: "white", fontSize: 14, mb: 1 }}>
        Ezzel a jumpcode-dal egy kattintással az általad választott szakma vagy szponzor oldalára
        ugorhatsz:
      </Typography>
      <Stack
        component="form"
        direction="row"
        spacing={2}
        sx={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/jumpcode/${jumpcode}`);
        }}
      >
        <TextField
          color="info"
          sx={{ color: "white", width: "100%" }}
          InputProps={{ sx: { color: "white" } }}
          placeholder="Add meg a jumpcode-ot itt:"
          onChange={(e) => setJumpcode(e.target.value)}
          value={jumpcode}
          size="small"
        />
        <Button sx={{ flexShrink: 0, px: 4 }}>Ugrás</Button>
      </Stack>
    </SectionContainer>
  );
};

export default JumpCodeSection;

