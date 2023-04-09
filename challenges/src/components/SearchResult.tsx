interface SearchResultProps {
    result: string
}



export const SearchResult = ({ result }:SearchResultProps) => {
    return (
      <div
        className="search-result"
        onClick={(e) => alert(`You selected ${result}!`)}
      >
        {result}
      </div>
    );
  };