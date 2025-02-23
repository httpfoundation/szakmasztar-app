import { getSponsors } from "@/actions/sponsors/sponsors";

export const revalidate = 3600;

const InfoPage = async () => {
  const sponsors = await getSponsors();

  return (
    <div>
      <h1>Információk</h1>

      <h2>Szponzorok</h2>

      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor.id}>{sponsor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoPage;

