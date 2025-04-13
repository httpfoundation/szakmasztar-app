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
import { KOMPETENCIA_QUESTIONS } from "@/lib/questions";

interface KompetenciaQuestionsProps {
  onSubmit(answers: typeof KOMPETENCIA_QUESTIONS): void;
}

const KompetenciaQuestions: FC<KompetenciaQuestionsProps> = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(KOMPETENCIA_QUESTIONS);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(answers);
    setAnswers(KOMPETENCIA_QUESTIONS);
  }

  return (
    <Stack spacing={3} component="form" onSubmit={handleFormSubmit}>
      <Typography variant="body2">
        Ha a kijelentés olyan helyzetet ír le, amiben még nem voltál próbáld elképzelni, hogy hogy
        menne Neked az adott tevékenység (esetleg gondolj már megtörtént hasonló cselekvésre)!
      </Typography>
      <Typography variant="body2" sx={{ mt: -2, fontWeight: 500 }}>
        1 - ez nehezebben menne nekem, mint hasonló korú társaimnak,
        <br />
        2 - ez ugyanúgy menne nekem, mint hasonló korú társaimnak,
        <br />3 - ez könnyebben menne nekem, mint hasonló korú társaimnak
      </Typography>

      <Stack
        sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" }, gap: 2 }}
      >
        {KOMPETENCIA_QUESTIONS.map((kompetenciaCategory) => (
          <Stack key={kompetenciaCategory.categoryId} spacing={2}>
            <Typography variant="h6" sx={{ fontSize: 21 }}>
              {kompetenciaCategory.categoryName}
            </Typography>
            {kompetenciaCategory.questions.map((question) => (
              <FormControl key={question.id}>
                <FormLabel
                  sx={{ fontSize: 15, color: "text.primary", fontWeight: 600 }}
                  color="info"
                >
                  {question.question}
                </FormLabel>

                <RadioGroup name={`question-${question.id}`} sx={{ flexDirection: "row", gap: 4 }}>
                  {[1, 2, 3].map((value) => (
                    <FormControlLabel
                      value={value}
                      key={value}
                      control={<Radio color="info" sx={{ "& svg": { color: "#fff" } }} />}
                      label={value.toString()}
                      sx={{ "& .MuiTypography-root": { fontSize: 16 } }}
                      checked={answers.some(
                        (x) =>
                          x.categoryId === kompetenciaCategory.categoryId &&
                          x.questions.some((q) => q.id === question.id && q.value === value)
                      )}
                      onChange={() =>
                        setAnswers((prev) =>
                          prev.map((c) =>
                            c.categoryId === kompetenciaCategory.categoryId
                              ? {
                                  ...c,
                                  questions: c.questions.map((q) =>
                                    q.id === question.id ? { ...q, value } : q
                                  ),
                                }
                              : c
                          )
                        )
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))}
          </Stack>
        ))}
      </Stack>

      <Button
        type="submit"
        sx={{ width: "fit-content" }}
        size="large"
        color="success"
        disableElevation
      >
        Küldés
      </Button>
    </Stack>
  );
};

export default KompetenciaQuestions;
