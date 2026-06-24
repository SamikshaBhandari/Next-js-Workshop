import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"

export async function GET() {
    try {
        const [products] = await db.execute('SELECT * FROM products')

        return NextResponse.json({
            message: "Products fetched successfully from database",
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

        const query = `
            INSERT INTO products (title, price, description, category, image, rating) 
            VALUES (?, ?, ?, ?, ?, ?)
        `

        await db.execute(query, [
            product.title,
            product.price,
            product.description,
            product.category,
            product.image,
            JSON.stringify(product.rating)
        ])

        return NextResponse.json({
            message: 'Product inserted successfully into database',
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