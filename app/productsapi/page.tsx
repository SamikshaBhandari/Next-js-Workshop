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

export default async function ProductsCatalogPage() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return notFound();
    const data = (await res.json()) as Product[];

    return (
        <main className="max-w-6xl mx-auto p-6 mt-2 bg-white">
            <h1 className="text-2xl font-bold mb-8 text-gray-900">
                Our Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
                {data.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex justify-center items-center h-48 mb-3 bg-white">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={140}
                                    height={140}
                                    className="object-contain max-h-44"
                                    unoptimized
                                />
                            </div>

                            <div className="space-y-1 bg-white">
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <h2 className="font-medium text-sm text-gray-900 line-clamp-2">
                                    {item.title}
                                </h2>
                                <p className="text-gray-900 font-bold text-base">${item.price}</p>

                                <p className="text-gray-500 text-[11px] mt-1.5 line-clamp-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 bg-white">
                            <Link
                                href={`/productsapi/${item.id}`}
                                className="bg-gray-950 text-white text-xs font-medium py-2 rounded-md block w-full text-center hover:bg-gray-800 transition-colors"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}