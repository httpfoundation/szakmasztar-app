"use client";

import { FC, FormEvent, useState } from "react";
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { IPARAGI_QUESTIONS } from "@/lib/questions";

interface IpariErdeklodesQuestionsProps {
  onSubmit(selectedQuestions: typeof IPARAGI_QUESTIONS): void;
}

const IpariErdeklodesQuestions: FC<IpariErdeklodesQuestionsProps> = ({ onSubmit }) => {
  const [selectedQuestions, setSelectedQuestoins] = useState<typeof IPARAGI_QUESTIONS>([]);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(selectedQuestions);
    setSelectedQuestoins([]);
  }

  return (
    <Stack
      spacing={1}
      sx={{ alignItems: "flex-start" }}
      component="form"
      onSubmit={handleFormSubmit}
    >
      {IPARAGI_QUESTIONS.map((question) => (
        <FormControlLabel
          key={question.id}
          control={
            <Checkbox
              checked={selectedQuestions.some((q) => q.id === question.id)}
              onChange={(_, checked) =>
                setSelectedQuestoins((prev) =>
                  checked ? [...prev, question] : prev.filter((q) => q.id !== question.id)
                )
              }
            />
          }
          label={question.question}
          sx={{ "& .MuiTypography-root": { fontSize: 16, userSelect: "none" } }}
        />
      ))}

      <Button type="submit" size="large" sx={{ mt: 1 }} disableElevation>
        Küldés
      </Button>
    </Stack>
  );
};

export default IpariErdeklodesQuestions;
