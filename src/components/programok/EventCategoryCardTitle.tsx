import { Typography } from "@mui/material";

interface EventCategoryCardTitleProps {
  title: string;
}

const EventCategoryCardTitle = ({ title }: EventCategoryCardTitleProps) => {
  return (
    <Typography variant="h6" gutterBottom sx={{ color: "primary.contrastText", minHeight: 56 }}>
      {title}
    </Typography>
  );
};

export default EventCategoryCardTitle;
