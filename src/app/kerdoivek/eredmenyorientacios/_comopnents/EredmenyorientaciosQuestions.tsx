import { FC, FormEvent, useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { EREDMENYORIENTACIONS_QUESTIONS } from "@/lib/questions";
import { EredmenyorientaciosAnswerType } from "./Eredmenyorientacios";

interface EredmenyorientaciosQuestionsProps {
  onSubmit(answers: EredmenyorientaciosAnswerType[]): void;
}

const EredmenyorientaciosQuestions: FC<EredmenyorientaciosQuestionsProps> = ({ onSubmit }) => {
  const [answers, setAnswers] = useState<EredmenyorientaciosAnswerType[]>(
    EREDMENYORIENTACIONS_QUESTIONS.map((question) => ({ ...question, value: null }))
  );

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(answers);
    setAnswers(EREDMENYORIENTACIONS_QUESTIONS.map((question) => ({ ...question, value: null })));
  }

  return (
    <Stack spacing={3} component="form" onSubmit={handleFormSubmit}>
      <Typography variant="body2">
        Lássuk, hogy benned mennyire erős a hajtóerő a jó eredmények elérésére! Jelöld be minden
        egyes kérdésre azt a választ, amelyiket Magadra nézve igaznak tartasz!
      </Typography>

      <Stack
        sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" }, gap: 2 }}
      >
        {EREDMENYORIENTACIONS_QUESTIONS.map((question) => (
          <FormControl key={question.id}>
            <FormLabel sx={{ fontSize: 16, color: "text.primary", fontWeight: 600 }}>
              {question.question}
            </FormLabel>
            <RadioGroup name={`question-${question.id}`}>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="Igen"
                sx={{ "& .MuiTypography-root": { fontSize: 16 } }}
                checked={answers.find((ans) => ans.id === question.id)?.value === true}
                onChange={() =>
                  setAnswers((prev) =>
                    prev.map((ans) => (ans.id === question.id ? { ...ans, value: true } : ans))
                  )
                }
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="Nem"
                sx={{ "& .MuiTypography-root": { fontSize: 16 } }}
                checked={answers.find((ans) => ans.id === question.id)?.value === false}
                onChange={() =>
                  setAnswers((prev) =>
                    prev.map((ans) => (ans.id === question.id ? { ...ans, value: false } : ans))
                  )
                }
              />
            </RadioGroup>
          </FormControl>
        ))}
      </Stack>

      <Button
        type="submit"
        sx={{ width: "fit-content" }}
        size="large"
        color="error"
        disableElevation
      >
        Küldés
      </Button>
    </Stack>
  );
};

export default EredmenyorientaciosQuestions;
