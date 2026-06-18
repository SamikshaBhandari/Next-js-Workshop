import { ProductData } from "../page";

export default async function Productpage({ params }: PageProps<"/products/[id]">) {
    const { id } = await params
    const Data = ProductData.find(d => d.id == id);
    return (
        <>
            <div className=" flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-3xl text-red-600 text-center font-bold">Product Details </h1>
                <p className="text-gray-50 font-bold text-center ">{Data?.id}</p>
                <p className="text-gray-50 folt-bold text-center" >{Data?.Name}</p>
                <p className="text-gray-50 folt-bold text-center" >{Data?.price}</p>


            </div>
        </>
    )
}