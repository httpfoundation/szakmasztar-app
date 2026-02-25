import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@/components/common/Link";
import LinkButton from "../common/LinkButton";

interface LocationLinkButtonProps {
  title: string;
  slug: string;
}

const LocationLinkButton = ({ title, slug }: LocationLinkButtonProps) => {
  return (
    <LinkButton component={Link} href={slug} size="small" startIcon={<LocationOnIcon />}>
      {title}
    </LinkButton>
  );
};

export default LocationLinkButton;
