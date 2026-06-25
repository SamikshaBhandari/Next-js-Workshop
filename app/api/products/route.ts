import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { getProductFromDB } from "@/services/productServices";
import { createProductInDB } from "@/services/productServices";

export async function GET() {
    try {
        const products = await getProductFromDB();
        return NextResponse.json({
            message: "Products fetched successfully from database using service layer",
            products: products
        },

            {
                status: 200
            })

    } catch (error) {
        return NextResponse.json({
            message: "Error during fetching products from database",
            error
        },

            {
                status: 500
            })
    }
}


export async function POST(req: NextRequest) {
    try {
        const product = await req.json()
        console.log("POST product method triggered")
        await createProductInDB(product);

        return NextResponse.json({
            message: 'Product inserted successfully into database using services layer',
            product
        },
            {
                status: 200

            })

    } catch (error) {
        return NextResponse.json({
            message: "Error during inserting product into database",
            error
        },
            {
                status: 500

            })
    }
}