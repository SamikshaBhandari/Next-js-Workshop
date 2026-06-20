import react from 'react';
import Link from 'next/link';


export default function Page() {
    return (
        <>
            <div>404 not found page</div>
            <Link href={"/notfound"}>Go back to home page</Link>

        </>

    )
}