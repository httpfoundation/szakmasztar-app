import { redirect } from "next/navigation";
import { getArticle } from "@/actions/articles/articles";

interface JumpCodePageProps {
  params: Promise<{ jumpcode: string }>;
}

const JumpCodePage = async ({ params }: JumpCodePageProps) => {
  const jumpcode = (await params).jumpcode;
  const article = await getArticle({ slug: `jumpcode-${jumpcode}` });

  if (article.lead === "SZPONZOR" && article.content === "#") {
    return <div>Ennek a szponzornak nincs weboldala.</div>;
  }

  return redirect(article.content);
};

export default JumpCodePage;

