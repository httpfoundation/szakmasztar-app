import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const revalidate = 3600;

const NakEventsPage = async () => {
  return (
    <PageContainer>
      <PageTitle>Nemzeti Agrárkamara szakmai események</PageTitle>
    </PageContainer>
  );
};

export default NakEventsPage;
