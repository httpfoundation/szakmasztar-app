import PageContainer from "@/components/layouts/PageContainer";
import EventCalendar from "@/components/programok/EventCalendar";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

const SchedulePage = async () => {
  return (
    <>
      <YellowTitle>Programnaptár</YellowTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <EventCalendar />
      </PageContainer>
    </>
  );
};

export default SchedulePage;
