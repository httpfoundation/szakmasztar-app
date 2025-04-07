import FormattedContent from "../FormattedContent";

interface EventCategoryDescriptionProps {
  description: string;
}

const EventCategoryDescription = ({ description }: EventCategoryDescriptionProps) => {
  return (
    <FormattedContent variant="body2" align="left" sx={{ pb: 2 }}>
      {description}
    </FormattedContent>
  );
};

export default EventCategoryDescription;
