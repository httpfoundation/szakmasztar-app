import { getSponsors } from "@/actions/sponsors/sponsors";
import PageTitle from "@/components/common/PageTitle";
import SectionContainer from "@/components/layouts/SectionContainer";
import OpeningHours from "../_components/OpeningHours";
import SponsorSection from "../_components/SponsorSection";

export const revalidate = 3600;

const InfoPage = async () => {
  const sponsors = await getSponsors();

  return (
    <>
      <SectionContainer>
        <PageTitle>Információk</PageTitle>
      </SectionContainer>
      <OpeningHours />
      <SponsorSection sponsors={sponsors} />
    </>
  );
};

export default InfoPage;
