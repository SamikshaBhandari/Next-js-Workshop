import React from 'react';

function waitForThreeSeconds() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Page() {

    await waitForThreeSeconds();

    throw new Error("executed error");
    
    return (
        <>
            <div>This is a about page.</div>
        </>
    );
}