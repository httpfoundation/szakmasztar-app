import { Metadata } from "next";
import { getSponsors } from "@/actions/sponsors/sponsors";
import YellowTitle from "@/components/ui/YellowTitle";
import OpeningHours from "../_components/OpeningHours";
import SponsorSection from "../_components/SponsorSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Információk",
};

const InfoPage = async () => {
  const sponsors = await getSponsors();

  return (
    <>
      <YellowTitle sx={{ mb: 2 }}>Információk</YellowTitle>
      <OpeningHours />
      <SponsorSection sponsors={sponsors} />
    </>
  );
};

export default InfoPage;
