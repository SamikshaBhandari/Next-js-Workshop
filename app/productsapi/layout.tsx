import React from "react";
import Link from "next/link";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">

            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tight text-gray-950">
                        FakeStore
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-gray-600">
                        <Link href="/hello" className="hover:text-black transition-colors">Home</Link>
                        <Link href="/hhh" className="hover:text-black transition-colors">About</Link>
                        <Link href="/ghj" className="hover:text-black transition-colors">Contact</Link>
                        <Link href="/carts" className="hover:text-black transition-colors">Carts</Link>
                        <Link href="/productsapi" className="text-black font-semibold border-b-2 border-black pb-1">Products</Link>
                    </div>
                </div>
            </nav>

            <div className="w-full bg-white">
                {children}
            </div>

        </div>
    );
}