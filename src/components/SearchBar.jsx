import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        type="text"
        placeholder="Search by book title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 w-2/3 border rounded shadow"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
