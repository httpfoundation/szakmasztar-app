"use client";

import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import EredmenyorientaciosQuestions from "./EredmenyorientaciosQuestions";

export type EredmenyorientaciosAnswerType = {
  id: number;
  question: string;
  value: boolean | null;
  pointForYes: number;
  pointForNo: number;
};

const Eredmenyorientacios = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<EredmenyorientaciosAnswerType[]>([]);

  if (!submitted) {
    return (
      <EredmenyorientaciosQuestions
        onSubmit={(answers) => {
          setSubmitted(true);
          setAnswers(answers);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      />
    );
  }

  const totalPoints = answers.reduce((acc, curr) => {
    if (curr.value === true) {
      return acc + curr.pointForYes;
    }

    if (curr.value === false) {
      return acc + curr.pointForNo;
    }

    return acc;
  }, 0);

  return (
    <Stack spacing={1.5}>
      <Typography variant="h6">
        {totalPoints <= 8
          ? "1-8 pont: kevésbé fontos számodra a jó iskolai teljesítmény"
          : totalPoints <= 16
            ? "9-16 pont: közepesen fontos számodra a jó iskolai teljesítmény"
            : "17-24 pont: nagyon fontos számodra a jó iskolai teljesítmény"}
      </Typography>
      <Typography variant="body2">
        Minél magasabb pontszámot kaptál, annál fontosabb számodra a jó, magas színvonalú iskolai
        teljesítmény, vagyis magas pontszám esetén kíváncsian és szívesen tanulsz, ami a
        hatékonyságod és a későbbi sikeres életpályád egyik fontos alapja. Az alacsonyabb pontszám
        azt jelzi Neked, hogy az iskolai tanulás területén érdemes még fejlődnöd. Szüleid és
        tanáraid segítségét biztosan kérheted!
      </Typography>

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

export default Eredmenyorientacios;
