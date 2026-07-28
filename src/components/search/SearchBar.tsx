import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  reset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch, reset }) => {
  const [search, setSearch] = useState(value);

  // Prevent API calls on every letter typed
  useEffect(() => {
    setSearch(value);
  }, [value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, onSearch]);

  return (
    <div className="relative w-full max-w-xl">
      <div className="flex items-center backdrop-blur-md border border-white/15 rounded-full px-4 py-3 shadow-lg">
        <div className="pr-3">
          <FiSearch size={28} color="var(--color-muted)" />
        </div>
        <div className="absolute right-3 text-muted cursor-pointer">
          <IoClose size={28} onClick={reset} />
        </div>
        <input
          type="text"
          placeholder="Search for movies..."
          className="bg-transparent outline-none text-font placeholder-muted w-full"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </div>
  );
};

export default SearchBar;
