import { FC } from "react";
import { Divider, Typography } from "@mui/material";
import SectionContainer from "../layouts/SectionContainer";
import YellowTitle from "../ui/YellowTitle";

interface QuestionTitleProps {
  title: string;
  description: string;
}

const QuestionTitle: FC<QuestionTitleProps> = ({ title, description }) => {
  return (
    <>
      <YellowTitle>{`${title} kérdőív`}</YellowTitle>

      <SectionContainer sx={{ bgcolor: "#00000020" }}>
        <Typography
          variant="body2"
          sx={{ color: "primary.contrastText", lineHeight: "1.5" }}
          align="justify"
        >
          {description}
        </Typography>
      </SectionContainer>

      <Divider
        sx={{
          height: "1px",
          border: "0",
          width: "100%",
          bgcolor: "#fff1",
        }}
      />
    </>
  );
};

export default QuestionTitle;
