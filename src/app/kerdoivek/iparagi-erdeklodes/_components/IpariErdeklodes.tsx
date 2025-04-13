"use client";

import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { IPARAGI_ANSWERS, IPARAGI_QUESTIONS } from "@/lib/questions";
import IpariErdeklodesQuestions from "./IpariErdeklodesQuestions";

const IpariErdeklodes = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedQuestions, setSelectedQuestoins] = useState<typeof IPARAGI_QUESTIONS>([]);

  if (!submitted) {
    return (
      <IpariErdeklodesQuestions
        onSubmit={(selectedQuestions) => {
          setSubmitted(true);
          setSelectedQuestoins(selectedQuestions);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      />
    );
  }

  const letterCount = [...selectedQuestions.map((q) => q.letter)].reduce(
    (acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
  const sortedLetters = Object.entries(letterCount)
    .sort((a, b) => b[1] - a[1])
    .map((l) => l[0]);

  return (
    <Stack spacing={2}>
      {sortedLetters.length === 0 ? (
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Nem válaszoltál egy kérdésre sem!
        </Typography>
      ) : (
        sortedLetters.map((letter) => (
          <Stack key={letter}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {IPARAGI_ANSWERS[letter as keyof typeof IPARAGI_ANSWERS].title}
            </Typography>
            <Typography variant="body2" align="justify">
              {IPARAGI_ANSWERS[letter as keyof typeof IPARAGI_ANSWERS].description}
            </Typography>
          </Stack>
        ))
      )}

      <Button
        size="large"
        color="success"
        sx={{ width: "fit-content" }}
        onClick={() => {
          setSubmitted(false);
          setSelectedQuestoins([]);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
        disableElevation
      >
        Újrakezdés
      </Button>
    </Stack>
  );
};

export default IpariErdeklodes;
