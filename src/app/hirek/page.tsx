import Link from "next/link";
import { Typography } from "@mui/material";
import { getArticles } from "@/actions/articles/articles";
import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";
import { env } from "@/env";

export const revalidate = 3600;

const NewsPage = async () => {
  const articles = await getArticles({ categoryId: env.ARTICLES_CATEGORY_ID });
  return (
    <PageContainer>
      <PageTitle>Hírek</PageTitle>
      {articles.map((article) => (
        <Link href={`/hirek/${article.slug}`} key={article.id}>
          <Typography variant="body1" color="primary.contrastText">
            {article.title}
          </Typography>
        </Link>
      ))}
    </PageContainer>
  );
};

export default NewsPage;
