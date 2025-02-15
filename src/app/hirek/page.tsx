import Link from "next/link";
import { getArticles } from "@/actions/articles/articles";
import { env } from "@/env";

export const revalidate = 3600;

const NewsPage = async () => {
  const articles = await getArticles({ categoryId: env.ARTICLES_CATEGORY_ID });
  return (
    <div>
      <h1>Hírek</h1>
      {articles.map((article) => (
        <Link href={`/hirek/${article.slug}`} key={article.id}>
          {article.title}
        </Link>
      ))}
    </div>
  );
};

export default NewsPage;
