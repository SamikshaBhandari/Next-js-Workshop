import react from 'react';
import Link from 'next/link';
export const ProductData = [

    {
        id: "1",
        Name: "Titan Raga Rose Gold Minimalist",
        category: 'Designer Luxury', price: "2500",
        desc: "An elegant asymmetric oval luxury timepiece featuring a premium mother-of-pearl dial and a sleek stone-studded designer bracelet strap.",
        image: "/image/ll.webp"
    },
    {
        id: "2",
        Name: "Armitron Diamond Luxe",
        category: "Classic Premium",
        price: "1000",
        desc: "A sophisticated classic dress watch with a crystal-accented dial, classic Roman numerals markers, and a polished link metal bracelet.",
        image: "/image/OIP.webp"
    },
    {
        id: "3", Name: "Geneva Diamond Chronograph",
        category: "Fashion Chrono", price: "1500",
        desc: "A stunning luxury fashion statement watch boasting a crystal-encrusted bezel, multi-dial chronograph aesthetic, and full rose gold finishing.",
        image: "/image/watch.jpg"
    }
]

export default function Page() {
    return (

        <>
            <div className='min-h-screen bg-gray-100 text-black p-6'>

                <h1 className='text-center font-black text-4xl mt-6 mb-10 text-gray-800'>
                    Product Catalog
                </h1>

                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            ProductData.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col justify-between"
                                >
                                    <div>
                                        <img
                                            src={product.image}
                                            alt={product.Name}
                                            className="w-full h-48 rounded-md border border-gray-200 object-cover mb-4"
                                        />
                                        <div className="text-start space-y-1">
                                            <p className="text-gray-400 text-xs font-bold uppercase">ID: #{product.id}</p>
                                            <h2 className="text-black font-extrabold text-lg leading-snug min-h-[3.5rem]">
                                                {product.Name}
                                            </h2>
                                            <p className="text-xs text-gray-500 font-medium inline-block bg-gray-100 px-2 py-0.5 rounded">
                                                {product.category}
                                            </p>
                                            <p className="text-emerald-600 font-black text-base pt-1">
                                                Rs. {product.price}
                                            </p>
                                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 pt-1">
                                                {product.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="bg-green-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-green-700 inline-block w-full transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}