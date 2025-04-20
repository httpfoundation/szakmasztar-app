import { Metadata } from "next";
import EventCalendar from "@/components/programok/EventCalendar";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Programnaptár",
};

const SchedulePage = async () => {
  return (
    <>
      <YellowTitle>Programnaptár</YellowTitle>
      <EventCalendar />
    </>
  );
};

export default SchedulePage;
