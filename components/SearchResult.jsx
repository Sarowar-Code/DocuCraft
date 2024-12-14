// Jehetu eti ekti client component er moddhe use hoyeche,
// tai eti o client component,
// jodi children props er madddhome component pathatam tahole "use Client" likha lagto.
import Link from "next/link";
const SearchResult = ({ results, term, closeSearchResult }) => {
    return (
        <div className="absolute left-0 top-12 z-[999] rounded-md bg-white p-4 shadow">
            <p>
                Showing results for
                <span className="font-semibold">"{term}":</span>
            </p>
            <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
                {results.map((result) => (
                    <li key={result.id}>
                        <Link
                            onClick={(e) => closeSearchResult(e)}
                            href={`/docs/${result.id}`}
                            className="transition-all hover:text-emerald-600 "
                        >
                            {result.title}{" "}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResult;
