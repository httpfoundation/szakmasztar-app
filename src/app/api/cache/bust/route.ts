import { env } from "@/env";
import { CACHE_TAGS, revalidateCache } from "@/lib/cache";

export async function POST(request: Request) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== env.API_KEY) {
    return Response.json({ success: false, message: "Invalid API key" }, { status: 401 });
  }

  const body = await request.json();
  const tag = (body.tag || "") as keyof typeof CACHE_TAGS;
  const id = body.id as string | undefined;

  if (!tag) {
    return Response.json({ success: false, message: "Please specify a tag" }, { status: 400 });
  }

  revalidateCache({ tag, id });

  return Response.json({ success: true }, { status: 200 });
}

