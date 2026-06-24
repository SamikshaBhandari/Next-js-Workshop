import React from "react"
import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"

export async function POST(req: NextRequest) {
    try {

        const user = await req.json()


        console.log("post method triggered")

        await db.execute("INSERT INTO users(email,username,password) VALUES (?,?,?)", [user.email, user.username, user.password])

        return NextResponse.json({
            message: 'Data inserted successfully',
            user
        }, {
            status: 200
        })
    }
    catch (error) {
        return NextResponse.json({
            message: "Dublicate user entry",
            error
        }
            , {
                status: 500,

            }
        )
    }
}

export async function GET() {
    try {
        const [user] = await db.execute('select * from users')
        return NextResponse.json({
            message: "users fetched ",
            user
        }, {
            status: 200
        }
        )


    } catch (error) {
        return NextResponse.json({
            Message: "Error during fetching user from database",
            error
        }, {
            status: 500
        }
        )

    }
}

export async function Update() {

    try {



    } catch (error) {



    }
}