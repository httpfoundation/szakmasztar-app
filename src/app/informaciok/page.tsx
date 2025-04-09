import { getSponsors } from "@/actions/sponsors/sponsors";
import GradientTitle from "@/components/ui/GradientTitle";
import OpeningHours from "../_components/OpeningHours";
import SponsorSection from "../_components/SponsorSection";

export const revalidate = 3600;

const InfoPage = async () => {
  const sponsors = await getSponsors();

  return (
    <>
      <GradientTitle sx={{ mb: 2 }}>Információk</GradientTitle>
      <OpeningHours />
      <SponsorSection sponsors={sponsors} />
    </>
  );
};

export default InfoPage;
