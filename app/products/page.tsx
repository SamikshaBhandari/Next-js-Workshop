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
            <h1>Product Pages</h1>
            <ul>
                {
                    ProductData.map((product) => (
                        <div key={product.id}>
                            <li>{product.id}</li>
                            <li>{product.Name}</li>
                            <li>{product.category}</li>
                            <li>{product.price}</li>
                            <li>{product.desc}</li>
                            <li>
                                <img src={product.image} alt={product.Name} width="200" />
                            </li>
                        </div>
                    ))
                }


            </ul>
        </>
    )
}