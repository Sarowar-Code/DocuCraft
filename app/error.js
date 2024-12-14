"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <h2 className="text-red-500 font-bold">{error?.message}</h2>
            <button
                className="inline-flex justify-center rounded-lg bg-slate-700 my-2 px-3 py-2  font-semibold text-white hover:bg-slate-500"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
