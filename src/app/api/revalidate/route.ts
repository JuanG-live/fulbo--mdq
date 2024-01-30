import {revalidatePath, revalidateTag} from "next/cache";

export async function GET() {
  revalidatePath("matches");

  return Response.json({revalidated: true});
}