import { redirect } from "next/navigation";
import { getMapItems } from "@/actions/articles/articles";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [];
}

interface JumpCodePageProps {
  params: Promise<{ jumpcode: string }>;
}

const JumpCodePage = async ({ params }: JumpCodePageProps) => {
  const jumpcode = (await params).jumpcode;
  const boxItems = await getMapItems();
  const foundJumpCode = boxItems.find((item) => item.jumpCode === Number(jumpcode));

  if (!foundJumpCode) {
    redirect("/");
  }

  return redirect(foundJumpCode.href);
};

export default JumpCodePage;
