import { SearchResult } from "./SearchResult";

export interface ResultsType {
    name:string;
}

interface SearchResultsListProps {
    results: ResultsType[]
}


export const SearchResultsList = ({ results }:SearchResultsListProps) => {
    return (
      <div className="results-list">
        {results.map((result, id) => {
          return <SearchResult result={result.name} key={id} />;
        })}
      </div>
    );
  };