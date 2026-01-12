import { useState } from "react";

const SearchBar = ({ items }) => {
    const [query, setQuery] = useState("");

    const filteredItem = items.filter((items) =>
        query.toLowerCase().includes(items.toLowerCase())
    )


    return (
        <>
            <div>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search......"
                    required
                />
                <ul>
                    {filteredItem.map((items, index) => (
                        <li key={index}>
                            {items}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


const Search = () => {
    const items = ["apple", "banana", "pineapple", "mango", "graphs"]
    return (
        <SearchBar items={items} />
    )
}

export default Search;