import InfoIcon from "@mui/icons-material/Info";
import LinkButton from "../common/LinkButton";

interface EventLinkButtonProps {
  slug: string;
}

const EventLinkButton = ({ slug }: EventLinkButtonProps) => {
  return (
    <LinkButton href={`/${slug}`} size="small" startIcon={<InfoIcon />} direction="forward">
      Programok
    </LinkButton>
  );
};

export default EventLinkButton;
