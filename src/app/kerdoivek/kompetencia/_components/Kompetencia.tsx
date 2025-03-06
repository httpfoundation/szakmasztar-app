"use client";

import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { KOMPETENCIA_QUESTIONS } from "@/lib/questions";
import KompetenciaQuestions from "./KompetenciaQuestions";

const Kompetencia = () => {
  const [answers, setAnswers] = useState(KOMPETENCIA_QUESTIONS);
  const [submitted, setSubmitted] = useState(false);

  if (!submitted) {
    return (
      <KompetenciaQuestions
        onSubmit={(answers) => {
          setAnswers(answers);
          setSubmitted(true);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      />
    );
  }

  let rank = 1;
  const top3 = answers
    .map((category) => {
      const sum = category.questions.reduce((acc, question) => acc + question.value, 0);
      return { ...category, sum };
    })
    .sort((a, z) => z.sum - a.sum)
    .map((category, idx, arr) => {
      const newCategory = { ...category, rank };
      if (idx < arr.length - 1 && arr[idx + 1].sum < category.sum) {
        rank++;
      }

      return newCategory;
    })
    .filter((category) => category.rank <= 3);

  return (
    <Stack spacing={3}>
      {top3.map((category) => (
        <Stack spacing={1} key={category.categoryId}>
          <Typography variant="h6" sx={{ fontSize: 21 }}>
            #{category.rank}. {category.categoryName}
          </Typography>
          <Typography variant="body2">{category.description}</Typography>
          <Typography variant="body1">Pontszám: {category.sum}</Typography>
        </Stack>
      ))}

      <Button
        size="large"
        sx={{ width: "fit-content" }}
        onClick={() => {
          setSubmitted(false);
          setAnswers([]);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
        disableElevation
      >
        Újrakezdés
      </Button>
    </Stack>
  );
};

export default Kompetencia;
