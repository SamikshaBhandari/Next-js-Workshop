import { ProductData } from "../page";
import Link from 'next/link';

export default async function Productpage({ params }: PageProps<"/products/[id]">) {
    const { id } = await params
    const Data = ProductData.find(d => d.id == id);
    return (
        <>
            <div className="flex flex-col bg-gray-100 w-full justify-center items-center min-h-screen p-4">

                <h1 className="text-3xl text-red-600 text-center font-bold mb-6">Product Details</h1>

                {/* Clean Single Box Container: 
                    - Removed extra internal borders 
                    - Width is set to a solid w-80 
                */}
                <div className="bg-white rounded-xl p-5 w-80 shadow-sm border border-gray-200">

                    <img
                        src={Data?.image}
                        alt={Data?.Name}
                        className="w-full h-64 rounded-md border border-gray-200 object-cover mb-4"
                    />
                    <div className="text-start space-y-1.5 w-full">
                        <p className="text-gray-400 text-xs font-bold uppercase">ID:{Data?.id}</p>
                        <h2 className="text-black font-extrabold text-xl leading-tight">{Data?.Name}</h2>
                        <p className="text-sm text-gray-500 font-medium">{Data?.category}</p>
                        <p className="text-emerald-600 font-black text-lg pt-1">Rs. {Data?.price}</p>
                        <p className="text-gray-600 text-sm leading-relaxed pt-2">
                            {Data?.desc}
                        </p>
                        <div className="flex justify-center pt-4">
                            <Link href={`/products/${Data?.id}/not found`} className="bg-green-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-green-700 border-none cursor-pointer">
                                View Product
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}