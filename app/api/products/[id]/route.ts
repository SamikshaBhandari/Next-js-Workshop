import { NextRequest, NextResponse } from "next/server";
import { getSingleProductFromDB } from "@/services/productServices";
import { updateProductInDB } from "@/services/productServices";
import { deleteProductFromDB } from "@/services/productServices";

interface RouteContext {
    params: Promise<{ id: string }>
}

export async function GET(ctx: RouteContext) {
    try {
        const { id } = await ctx.params;

        const product: any = await getSingleProductFromDB(id);
        if (product.length === 0) {
            return NextResponse.json(null, { status: 404 });
        }

        return NextResponse.json(product[0], { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "error during get mapping execution",
            error
        },

            {
                status: 500

            });
    }
}


export async function PUT(req: NextRequest, ctx: RouteContext) {
    try {
        const { id } = await ctx.params;
        const product = await req.json();

        await updateProductInDB(id, product);

        return NextResponse.json({
            message: "Product updated successfully using serivce layer",
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

export async function DELETE(ctx: RouteContext) {

    try {
        const { id } = await ctx.params;
        await deleteProductFromDB(id);

        return NextResponse.json({
            message: `Product with id ${id} deleted successfully using service layer`
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