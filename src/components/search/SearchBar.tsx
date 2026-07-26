import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  reset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch, reset }) => {
  return (
    <div className="relative w-full max-w-xl">
      <div className="flex items-center backdrop-blur-md border border-white/15 rounded-full px-4 py-4 shadow-lg">
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
          onChange={(e) => onSearch(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchBar;
