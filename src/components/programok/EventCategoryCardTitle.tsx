import { Typography } from "@mui/material";

interface EventCategoryCardTitleProps {
  title: string;
}

const EventCategoryCardTitle = ({ title }: EventCategoryCardTitleProps) => {
  return (
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        color: "primary.contrastText",
        fontSize: 16,
        textTransform: "uppercase",
        mb: 1.5,
      }}
    >
      {title}
    </Typography>
  );
};

export default EventCategoryCardTitle;
