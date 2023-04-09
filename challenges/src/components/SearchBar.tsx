import  { useState, Dispatch, SetStateAction } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UserProps {
    name:string
}
interface SearchBarProps {
    setResults:  Dispatch<SetStateAction<UserProps[]>>
}

export const SearchBar = ({setResults}:SearchBarProps) => {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user: UserProps) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
                });
                setResults(results);
            });
        };

        const handleChange = (value:string) => {
            setInput(value);
            fetchData(value);
          };
      
        return (
            <div className="input-wrapper">
            <FontAwesomeIcon icon={faSearch} />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            </div>
        );
}