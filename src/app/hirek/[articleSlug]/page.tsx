import { getArticle, getArticles } from "@/actions/articles/articles";
import { env } from "@/env";
import { getArticleMetadata } from "@/lib/metadata";

interface ArticlePageProps {
  params: Promise<{ articleSlug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: ArticlePageProps) {
  return getArticleMetadata((await params).articleSlug);
}

export async function generateStaticParams() {
  const articles = await getArticles({ categoryId: env.ARTICLES_CATEGORY_ID });
  return articles.map((article) => ({ articleSlug: article.slug }));
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const articleSlug = (await params).articleSlug;
  const article = await getArticle({ slug: articleSlug });

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;

