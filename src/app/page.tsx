import Link from "next/link";
import { getArticles } from "@/actions/articles/articles";
import { env } from "@/env";

const IndexPage = async () => {
  const articles = await getArticles({ categoryId: env.ARTICLES_CATEGORY_ID });

  return (
    <div>
      <h1>Articles:</h1>
      {articles.map((article) => (
        <Link href={`/hirek/${article.slug}`} key={article.id}>
          {article.title}
        </Link>
      ))}
    </div>
  );
};

export default IndexPage;
