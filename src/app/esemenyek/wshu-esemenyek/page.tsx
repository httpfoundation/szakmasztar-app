import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const revalidate = 3600;

const OtherEventsPage = async () => {
  return (
    <PageContainer>
      <PageTitle>WorldSkills Hungary események</PageTitle>
    </PageContainer>
  );
};

export default OtherEventsPage;
