import react from 'react';
import Link from 'next/link';
export const ProductData = [

    {
        id: "1", Name: "SmartPhone", price: "250000"
    },
    {
        id: "2", Name: "Laptop", price: "1000000"
    },
    {
        id: "3", Name: "TV", price: "500000"
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
                        </div>
                    ))
                }


            </ul>
        </>
    )
}