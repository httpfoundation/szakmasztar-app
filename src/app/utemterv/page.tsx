import EventCalendar from "@/components/programok/EventCalendar";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

const SchedulePage = async () => {
  return (
    <>
      <YellowTitle>Programnaptár</YellowTitle>
      <EventCalendar />
    </>
  );
};

export default SchedulePage;
