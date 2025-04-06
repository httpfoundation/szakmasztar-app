import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
