import { revalidateTag } from "next/cache";

export async function GET() {
    revalidateTag("api", { expire: 10 });
    return Response.json({ success: "true" })
}