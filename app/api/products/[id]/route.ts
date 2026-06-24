import { NextRequest, NextResponse } from "next/server";
import { db } from '@/db';


interface RouteContext {
    params: Promise<{ id: string }>
}

export async function GET(req: NextRequest, ctx: RouteContext) {
    try {

        const { id } = await ctx.params;
        const [product]: any = await db.execute("select * from products WHERE id=?", [id]);
        if (product.length === 0) {
            return NextResponse.json(null, {
                status: 404
            })
        }

        return NextResponse.json(product[0],
            {
                status: 200
            }
        )
    }

    catch (error) {

        return NextResponse.json({
            message: "error during get mapping execution",
            error
        }, {
            status: 500
        })
    }
}


export async function PUT(req: NextRequest, ctx: RouteContext) {
    try {
        const { id } = await ctx.params;
        const product = await req.json();

        const query = "UPDATE products SET title = ?, price = ?, description = ?, category = ?, image = ?, rating = ? WHERE id = ?";

        await db.execute(query, [
            product.title,
            product.price,
            product.description,
            product.category,
            product.image,
            JSON.stringify(product.rating),
            id
        ]);

        return NextResponse.json({
            message: "Product updated successfully",
            product
        },

            {
                status: 200
            });

    }

    catch (error) {
        return NextResponse.json({
            message: "Error during update execution",
            error
        },
            {
                status: 500

            });
    }
}

export async function DELETE(req: NextRequest, ctx: RouteContext) {

    try {
        const { id } = await ctx.params;
        await db.execute("DELETE FROM products WHERE id = ?", [id]);
        return NextResponse.json({
            message: `Product with id ${id} deleted successfully`
        },

            {
                status: 200

            });
    }

    catch (error) {
        return NextResponse.json({
            message: "Error during delete execution",
            error
        },

            {
                status: 500

            });
    }
}