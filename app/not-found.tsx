import react from 'react';
import Link from 'next/link';
export default function Page() {
    return (
        <>
            <h1 className="text-2xl text-red-500">404:This is not found page</h1>
            <Link href="/text-notfound">Go to about
            </Link>
        </>

    )
}