import react from 'react';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(
) {
    return Response.json({ message: 'Hello World' })
}

export async function POST() {


    return Response.json({ hello: "hello world from post method" },

        {
            status: 200,

        }

    );
}
export async function PUT() {
    return Response.json({ Message: "Update successfully." },
        {
            status: 200,
        }
    );
}

export async function DELETE() {
    return Response.json({ Message: "delete successfully" },
        {
            status: 200,
        }
    )
}
