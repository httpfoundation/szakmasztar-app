import { FC } from "react";
import { Divider, Stack, Typography } from "@mui/material";

interface QuestionTitleProps {
  title: string;
  description: string;
}

const QuestionTitle: FC<QuestionTitleProps> = ({ title, description }) => {
  return (
    <>
      <Stack
        sx={{
          gap: { xs: 1, sm: 2, md: 3 },
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Stack spacing={1}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: 32, md: 42 }, color: "primary.main", position: "relative" }}
          >
            <span style={{ fontWeight: "bold" }}>{title}</span> kérdőív
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Stack>
      </Stack>
      <Divider
        sx={{
          height: "1px",
          border: "0",
          width: "100%",
          bgcolor: "primary.light",
          opacity: 0.2,
        }}
      />
    </>
  );
};

export default QuestionTitle;
