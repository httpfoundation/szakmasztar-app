"use client";

import { useState } from "react";
import { Divider, FormControlLabel, Radio, Stack, TextField, Typography } from "@mui/material";
import { SZAKMASZTAR_QUESTIONS } from "@/lib/questions";

type SzakmasztarQuestion = (typeof SZAKMASZTAR_QUESTIONS)[number] & { userAnswer: number | null };

const SzakmasztarQuestionnaire = () => {
  const [questions, setQuestions] = useState<SzakmasztarQuestion[]>(
    SZAKMASZTAR_QUESTIONS.map((question) => ({ ...question, userAnswer: null }))
  );

  const [interestingSkill1, setInterestingSkill1] = useState<string>("");
  const [interestingSkill2, setInterestingSkill2] = useState<string>("");
  const [interestingSkill3, setInterestingSkill3] = useState<string>("");
  const [festivalNumber, setFestivalNumber] = useState<string>("");

  return (
    <Stack>
      <Stack
        spacing={3}
        sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" }, gap: 2 }}
      >
        {questions.map((question, idx) => (
          <Stack key={idx}>
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              {idx + 1}. {question.question}
            </Typography>

            {question.answers.map((ans, idx) => (
              <FormControlLabel
                key={idx}
                control={
                  <Radio
                    color="info"
                    sx={{ "& svg": { color: "#fff", width: "18px", height: "18px" } }}
                  />
                }
                label={`${ans.text} (${ans.value})`}
                checked={question.userAnswer === ans.value}
                sx={{ ml: 1, "& .MuiTypography-root": { fontSize: 14 } }}
                onChange={() =>
                  setQuestions(
                    questions.map((q) =>
                      q.id === question.id ? { ...q, userAnswer: ans.value } : q
                    )
                  )
                }
              />
            ))}
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ borderColor: "#ffffff30", my: 3 }} />

      <Stack spacing={1} sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
          Hányadik Szakma Sztár Fesztivál az idei?
        </Typography>
        <Typography variant="body2">
          A kérdésekre adott helyes válaszok utáni számok nem pontok, hanem a megoldás darabjai.
          Ezek összeadásával, erre a kérdésre is tudsz válaszolni!
        </Typography>
        <Typography variant="body2">Írd a helyes számot a lenti négyzetbe:</Typography>
        <TextField
          color="info"
          sx={{
            "& input": {
              border: "1px solid #ffffff",
              borderRadius: 0,
              textAlign: "center",
              fontWeight: 600,
              fontSize: 18,
            },
            width: "61px",
            mx: "auto",
          }}
          value={festivalNumber}
          onChange={(e) => setFestivalNumber(e.target.value.replace(/[^0-9]/g, ""))}
          autoComplete="off"
        />
        <Typography variant="body2">
          Ha megvan a megoldás, mutasd meg kollégáinknak a Szakma Sztár Szigeten és válassz az ott
          fellelhető ajándékokból.
        </Typography>
      </Stack>

      <Divider sx={{ borderColor: "#ffffff30", my: 3 }} />

      <Stack spacing={1}>
        <Typography sx={{ fontSize: 15, fontWeight: 600, textAlign: "center" }}>
          Melyik három szakmát találtad a legérdekesebbnek?
        </Typography>
        <TextField
          color="info"
          size="small"
          sx={{ "& input": { border: "1px solid #ffffff30", borderRadius: 1 } }}
          value={interestingSkill1}
          onChange={(e) => setInterestingSkill1(e.target.value)}
          autoComplete="off"
          placeholder="Első szakma"
        />
        <TextField
          color="info"
          size="small"
          sx={{ "& input": { border: "1px solid #ffffff30", borderRadius: 1 } }}
          value={interestingSkill2}
          onChange={(e) => setInterestingSkill2(e.target.value)}
          autoComplete="off"
          placeholder="Második szakma"
        />
        <TextField
          color="info"
          size="small"
          sx={{ "& input": { border: "1px solid #ffffff30", borderRadius: 1 } }}
          value={interestingSkill3}
          onChange={(e) => setInterestingSkill3(e.target.value)}
          autoComplete="off"
          placeholder="Harmadik szakma"
        />
      </Stack>

      <Divider sx={{ borderColor: "#ffffff30", my: 3 }} />

      <Stack spacing={1}>
        <Typography sx={{ fontSize: 15, fontWeight: 600, textAlign: "center" }}>
          Hol tanulhatsz szakmát?
        </Typography>

        <Typography variant="body2" align="justify">
          Nyolcadik után választhatod először a szakmai oktatást, ami két intézménytípusban zajlik.
          A technikumban jellemzően öt év alatt, a szakképző iskolában három év alatt szerezhetsz
          szakmát.
        </Typography>

        <Typography variant="body2" align="justify">
          Mindkét iskolatípusra igaz, hogy először ágazatra jelentkezel és ágazati alapoktatásban
          veszel részt. A technikumban két év, a szakképző iskolában egy év után kezded a konkrét
          szakmát tanulni. Ennek során ösztöndíjban részesülhetsz, és lehetőséged van duális szakmai
          oktatásra. azaz vállalatnál tanulhatod a leendő szakmád. Ebben az esetben munkabért kapsz
          a vállalttól.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SzakmasztarQuestionnaire;
