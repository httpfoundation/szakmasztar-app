import { notFound, redirect } from "next/navigation";
import { getMapItems } from "@/actions/articles/articles";

interface JumpCodePageProps {
  params: Promise<{ jumpcode: string }>;
}

const JumpCodePage = async ({ params }: JumpCodePageProps) => {
  const jumpcode = (await params).jumpcode;
  const boxItems = await getMapItems();
  const foundJumpCode = boxItems.find((item) => item.jumpCode === Number(jumpcode));

  if (!foundJumpCode) {
    notFound();
  }

  return redirect(foundJumpCode.href);
};

export default JumpCodePage;
