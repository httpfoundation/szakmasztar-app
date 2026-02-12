import { Metadata } from "next";
import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 7200;

export const metadata: Metadata = {
  title: "WorldSkills Shanghai 2026 nemzeti döntők és szakmai bemutatók",
};

const WshuEventsPage = async () => {
  const events = await getEventsArticlesByCategory("wshu");
  const title = "WorldSkills Shanghai 2026 nemzeti döntők és szakmai bemutatók";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer sx={{ position: "relative", pb: 5 }}>
        <Starform />
        <EventCards events={events} permutatingColors />
      </PageContainer>
    </>
  );
};

export default WshuEventsPage;
