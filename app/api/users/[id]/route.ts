import { cookies } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    const cookies_get = req.cookies.get("Hello friends")

    const cookie = await cookies()
    cookie.set("hello", "samiksha")
    return Response.json({ Message: "Hello World " });
}

export async function POST() {
    return Response.json({ hello: "world" },
        {
            status: 200,
        }

    );
}