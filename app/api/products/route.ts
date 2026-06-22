import { FakeStoreData } from "@/data/fakestore"

export async function GET() {
    const data = FakeStoreData
    return Response.json(data)

}