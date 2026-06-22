import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function SingleProductPage({ params }: PageProps) {
    const { id } = await params;

    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res.ok) return notFound();
    const data = (await res.json()) as Product;

    return (
        <div className="flex flex-col items-center justify-center p-6 pt-12 bg-white min-h-[calc(100vh-80px)]">

            <div className="bg-white rounded-lg p-6 w-full max-w-sm border border-gray-200 shadow-sm">
                <div className="flex justify-center mb-4 bg-white">
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={180}
                        height={180}
                        className="object-contain h-48"
                        unoptimized
                    />
                </div>
                <div className="space-y-2 bg-white">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        {data.category}
                    </span>
                    <h2 className="font-bold text-lg text-gray-900 leading-snug">
                        {data.title}
                    </h2>
                    <p className="text-gray-900 font-extrabold text-xl">${data.price}</p>
                    <p className="text-gray-600 text-xs leading-relaxed pt-2 border-t border-gray-100">
                        {data.description}
                    </p>
                </div>

                <div className="mt-6 bg-white">
                    <Link href="/productsapi" className="block text-center text-xs font-medium text-gray-600 hover:text-black border border-gray-200 py-2 rounded-md transition-colors">
                        Back to Products
                    </Link>
                </div>
            </div>

        </div>
    );
}