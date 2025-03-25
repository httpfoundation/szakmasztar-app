import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const revalidate = 3600;

const QuizesPage = async () => {
  return (
    <PageContainer>
      <PageTitle>Kvízek</PageTitle>
    </PageContainer>
  );
};

export default QuizesPage;
