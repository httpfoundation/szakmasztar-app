import { redirect } from "next/navigation";
import { getMapItems } from "@/actions/articles/articles";

export const revalidate = 7200;

export async function generateStaticParams() {
  const boxItems = await getMapItems();
  return boxItems
    .filter((x) => !!x.jumpCode && !!x.href && x.href === "#")
    .map((item) => ({
      jumpcode: item.jumpCode.toString(),
    }));
}

interface JumpCodePageProps {
  params: Promise<{ jumpcode: string }>;
}

const JumpCodePage = async ({ params }: JumpCodePageProps) => {
  const jumpcode = (await params).jumpcode;
  const boxItems = await getMapItems();
  const foundJumpCode = boxItems.find((item) => item.jumpCode === Number(jumpcode));

  if (!foundJumpCode || !foundJumpCode.href || foundJumpCode.href === "#") {
    redirect("/");
  }

  return redirect(foundJumpCode.href);
};

export default JumpCodePage;
