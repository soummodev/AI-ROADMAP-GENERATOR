import { useRoadmap } from "../context/roadmapcontext.jsx           ";

function SearchBar({ placeholder = "Search skills, phases, projects..." }) {
  const { searchTerm, setSearchTerm } = useRoadmap();

  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      {}
      {searchTerm && (
        <button
          className="search-clear"
          onClick={() => setSearchTerm("")}
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar;