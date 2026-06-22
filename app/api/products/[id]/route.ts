
import { FakeStoreData } from "@/data/fakestore"


export async function GET(req: Request, ctx: RouteContext<"/api/products/[id]">) {
    const { id } = await ctx.params
    const foundProduct = FakeStoreData.find(data => data.id == parseInt(id))

    if (!foundProduct)
        return Response.json(null, { status: 404 });

    return Response.json({ foundProduct });

}