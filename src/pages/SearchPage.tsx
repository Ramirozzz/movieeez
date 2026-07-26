import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import { useSearchMovies } from "../hooks/useSearchMovies";
import SearchResults from "../components/search/SearchResults";
import MoviesPagination from "../components/pagination/MoviesPagination";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useSearchMovies(query, page);

  const handleSearch = (value: string) => {
    setSearchParams({ query: value, page: "1" });
  };

  // Handle pagination
  const handleNextPage = () => {
    if (!searchResults || page >= searchResults.total_pages) return;
    setSearchParams({
      query,
      page: String(page + 1),
    });
  };

  const handlePrevPage = () => {
    setSearchParams({
      query,
      page: String(Math.max(1, page - 1)),
    });
  };

  // Handle clear search input
  const handleClearInput = () => {
    setSearchParams({});
  };

  return (
    <section className="min-h-screen p-4 lg:px-15 ">
      <div className="flex justify-center pt-20 lg:pt-30">
        <SearchBar
          value={query}
          onSearch={handleSearch}
          reset={handleClearInput}
        />
      </div>
      {isLoading && (
        <p className="text-lg text-white/70 flex justify-center items-center mt-4 ">
          Searching...
        </p>
      )}

      {isError && (
        <p className="flex justify-center items-center h-[100vh] mt-4 text-red-400">
          Something went wrong: {error.message}
        </p>
      )}
      <div className="w-full">
        {searchResults && searchResults.results.length === 0 && (
          <div className="text-center mt-30">
            <p className="text-xl">No results found for "{query}"</p>
          </div>
        )}
        {searchResults && searchResults.results.length > 0 && (
          <div className="md:px-4 lg:px-13 mt-8 lg:mt-12 pb-15 lg:pb-10">
            <SearchResults searchResults={searchResults} />
            <MoviesPagination
              page={searchResults.page}
              totalPages={searchResults.total_pages}
              hasPrevPage={page > 1}
              hasNextPage={page < searchResults.total_pages}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
