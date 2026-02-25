"use client";

import { useCallback, useState } from "react";
import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GameImg from "@/assets/images/game-icon.svg";
import PageContainer from "@/components/layouts/PageContainer";
import SectionContainer from "@/components/layouts/SectionContainer";
import LinkChip from "@/components/ui/LinkChip";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useMounted } from "@/hooks/useMounted";
import { SZAKMASZTAR_QUESTIONS } from "@/lib/questions";

type QuestionAnswers = {
  userAnswerIndex: number | null;
  checkStatus: "correct" | "incorrect" | "unknown";
};

const SzakmasztarQuestionnaire = () => {
  const questions = SZAKMASZTAR_QUESTIONS;
  const [questionAnswers, setQuestionAnswers] = useLocalStorage<QuestionAnswers[]>(
    "quiz-question-answers",
    SZAKMASZTAR_QUESTIONS.map(() => ({
      userAnswerIndex: null,
      checkStatus: "unknown",
    }))
  );
  const [checked, setChecked] = useLocalStorage("quiz-checked", false);

  const mounted = useMounted();

  const checkAnswers = useCallback(() => {
    setChecked(true);
    setQuestionAnswers(
      questionAnswers.map((questionAnswer, questionIndex) => ({
        ...questionAnswer,
        checkStatus:
          questionAnswer.userAnswerIndex !== null &&
          questions[questionIndex].answers[questionAnswer.userAnswerIndex].correct
            ? "correct"
            : "incorrect",
      }))
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [questionAnswers, questions, setChecked, setQuestionAnswers]);

  const resetQuestions = useCallback(() => {
    setChecked(false);
    setQuestionAnswers(
      questionAnswers.map((questionAnswer) => ({
        ...questionAnswer,
        userAnswerIndex: null,
        checkStatus: "unknown",
      }))
    );
  }, [questionAnswers, setChecked, setQuestionAnswers]);

  if (!mounted) {
    return null;
  }
  const correctAnswersCount = questionAnswers.filter((q) => q.checkStatus === "correct").length;
  const allCorrect = correctAnswersCount === questions.length;

  return (
    <>
      <SectionContainer sx={{ backgroundColor: "#904e96" }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack direction="column" spacing={2} alignItems="flex-start" flex="1">
            <Typography
              variant="body2"
              sx={{ color: "primary.contrastText", lineHeight: "1.5" }}
              align="justify"
            >
              Válaszolj helyesen a kérdésekre és nyerj ajándékot!
              <br />
              Jelöld be a helyes válaszokat, majd kattints a képernyő alatt található &quot;Válaszok
              ellenőrzése&quot; gombra!
            </Typography>
          </Stack>
          <Box
            component="img"
            src={GameImg.src}
            alt="Játssz és nyerj!"
            sx={{
              width: "48px",
            }}
          />
        </Stack>
      </SectionContainer>

      {checked && (
        <SectionContainer sx={{ backgroundColor: allCorrect ? "#46e82d4a" : "#fd46464a" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 3,
              mb: 3,
            }}
          >
            {allCorrect ? (
              <CheckCircleOutlineIcon
                sx={{
                  fontSize: "5rem",
                  color: "#4cd137",
                }}
              />
            ) : (
              <HighlightOffIcon
                sx={{
                  fontSize: "5rem",
                  color: "#fd4647",
                }}
              />
            )}
            <Typography
              sx={{ fontSize: "0.9rem", fontWeight: 500, textAlign: "center", opacity: 0.9, mt: 3 }}
            >
              Helyes válaszaid száma:
            </Typography>
            <Stack direction="column" alignItems="center" sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: allCorrect ? "#4cd137" : "#fff",
                }}
              >
                {correctAnswersCount}/{questions.length}
              </Typography>
            </Stack>

            {allCorrect ? (
              <>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    textAlign: "center",
                    maxWidth: "400px",
                    mb: 2,
                  }}
                >
                  Gratulálunk!
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    textAlign: "center",
                    maxWidth: "500px",
                  }}
                >
                  Látogass el a Szakma Sztár Szigetre, mutasd be kollégáinknak ezt a képernyőt, és
                  válassz az ott fellelhető ajándékokból!
                </Typography>
                <LinkChip
                  href={"/terkep?szakmasztar-sziget"}
                  icon={<LocationOnIcon />}
                  sx={{ mt: 2 }}
                >
                  Szakma Sztár Sziget
                </LinkChip>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<ReplayIcon />}
                  sx={{ mt: 5 }}
                  onClick={resetQuestions}
                >
                  Újrakezdés
                </Button>

                <Divider sx={{ borderColor: "#ffffff7f", my: 5, width: "100%" }} />

                <Stack spacing={2} sx={{ px: 1 }}>
                  <Typography
                    sx={{ fontSize: "1rem", fontWeight: 600, textAlign: "center", mb: 1 }}
                  >
                    <InfoIcon sx={{ mr: 1, fontSize: "1.3rem", transform: "translateY(5px)" }} />
                    Hol tanulhatsz szakmát?
                  </Typography>

                  <Typography variant="body1" align="justify" sx={{ fontSize: "0.95rem" }}>
                    Nyolcadik után választhatod először a szakmai oktatást, ami két
                    intézménytípusban zajlik. A technikumban jellemzően öt év alatt, a szakképző
                    iskolában három év alatt szerezhetsz szakmát.
                  </Typography>

                  <Typography variant="body1" align="justify" sx={{ fontSize: "0.95rem" }}>
                    Mindkét iskolatípusra igaz, hogy először ágazatra jelentkezel és ágazati
                    alapoktatásban veszel részt. A technikumban két év, a szakképző iskolában egy év
                    után kezded a konkrét szakmát tanulni. Ennek során ösztöndíjban részesülhetsz,
                    és lehetőséged van duális szakmai oktatásra. azaz vállalatnál tanulhatod a
                    leendő szakmád. Ebben az esetben munkabért kapsz a vállalttól.
                  </Typography>
                </Stack>
              </>
            ) : (
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  textAlign: "center",
                  maxWidth: "500px",
                  mb: 1,
                }}
              >
                Ellenőrizd a válaszaidat, és próbáld meg újra!
              </Typography>
            )}
          </Box>
        </SectionContainer>
      )}

      <Divider
        sx={{
          height: "1px",
          border: "0",
          width: "100%",
          bgcolor: "#fff1",
        }}
      />

      <PageContainer sx={{ position: "relative", pb: 4 }}>
        <Stack>
          <Stack
            spacing={3}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
              gap: 2,
            }}
          >
            {questions.map((question, questionIndex) => (
              <Box
                key={questionIndex}
                sx={{
                  backgroundColor: {
                    correct: "#2cd11345",
                    incorrect: "#ff262625",
                    unknown: "#71376a",
                  }[questionAnswers[questionIndex].checkStatus],
                  borderRadius: 2,
                }}
              >
                <Stack sx={{ pb: 1.5 }}>
                  <Stack direction="row" alignItems="center" sx={{ px: 2, py: 1.5 }}>
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: 600, mr: 2.5, ml: 1 }}>
                      {questionIndex + 1}.
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1rem", fontWeight: 500, flex: 1, lineHeight: 1.4 }}
                    >
                      {question.question}
                    </Typography>
                    {questionAnswers[questionIndex].checkStatus === "correct" && (
                      <CheckIcon sx={{ color: "#4cd137", fontSize: "1.6rem" }} />
                    )}
                    {questionAnswers[questionIndex].checkStatus === "incorrect" && (
                      <CloseIcon sx={{ color: "#ff4747", fontSize: "1.6rem" }} />
                    )}
                    {questionAnswers[questionIndex].checkStatus === "unknown" && checked && (
                      <QuestionMarkIcon sx={{ color: "#ff9c50ff", fontSize: "1.6rem" }} />
                    )}
                  </Stack>

                  <Divider sx={{ borderColor: "#ffffff30", mb: 1.5 }} />

                  {question.answers.map((answer, answerIndex) => {
                    const isChecked =
                      questionAnswers[questionIndex].userAnswerIndex === answerIndex;

                    const color = {
                      correct: "#4cd137",
                      incorrect: "#ff4747",
                      unknown: "#fff",
                    }[isChecked ? questionAnswers[questionIndex].checkStatus : "unknown"];

                    return (
                      <FormControlLabel
                        key={answerIndex}
                        control={
                          <Radio
                            color="primary"
                            sx={{ "& svg": { color, width: "22px", height: "22px" } }}
                          />
                        }
                        label={answer.text}
                        checked={isChecked}
                        sx={{
                          ml: 1,
                          "& .MuiTypography-root": {
                            fontSize: "0.9rem",
                            color: color,
                            fontWeight:
                              questionAnswers[questionIndex].checkStatus !== "unknown" && isChecked
                                ? 600
                                : undefined,
                          },
                        }}
                        onChange={() =>
                          setQuestionAnswers(
                            questionAnswers.map((q, i) =>
                              i === questionIndex
                                ? { ...q, userAnswerIndex: answerIndex, checkStatus: "unknown" }
                                : q
                            )
                          )
                        }
                      />
                    );
                  })}
                </Stack>
              </Box>
            ))}
          </Stack>

          <Button
            sx={{ width: "fit-content", alignSelf: "center", mt: 3 }}
            size="large"
            color="success"
            disableElevation
            onClick={checkAnswers}
            startIcon={<CheckIcon />}
          >
            Válaszok ellenőrzése
          </Button>
        </Stack>
      </PageContainer>
    </>
  );
};

export default SzakmasztarQuestionnaire;
