import { getSponsors } from "@/actions/sponsors/sponsors";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

const SponsorsPage = async () => {
  const sponsors = await getSponsors();

  return (
    <>
      <GradientTitle>Szponzorok</GradientTitle>

      <div>
        {sponsors.map((sponsor) => (
          <div key={sponsor.id}>{sponsor.name}</div>
        ))}
      </div>
    </>
  );
};

export default SponsorsPage;
