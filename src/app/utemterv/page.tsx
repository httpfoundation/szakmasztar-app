import PageContainer from "@/components/layouts/PageContainer";
import EventCalendar from "@/components/programok/EventCalendar";
import GradientTitle from "@/components/ui/GradientTitle";
import Starform from "@/components/ui/Starform";

export const dynamic = "force-static";

const SchedulePage = async () => {
  return (
    <>
      <GradientTitle>Programnaptár</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <EventCalendar />
      </PageContainer>
    </>
  );
};

export default SchedulePage;
