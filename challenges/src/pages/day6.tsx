import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { ResultsType, SearchResultsList } from "../components/SearchResultsList";

import "../assets/css/search.css"

function Day6() {
    const [results, setResults] = useState<ResultsType[]>([]);
    return (
        <>
        <h2>SearchBar</h2>
        <div>
        <SearchBar setResults={setResults}/>
        {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
        </>
    )
}
export default Day6;