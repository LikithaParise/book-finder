import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') {
      alert('Please enter a book title!');
      return;
    }

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // Top 10 results
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h1>📚 Book Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        {books.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {books.map((book, index) => (
              <li key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt="Book cover"
                    style={{ width: '80px', height: 'auto', borderRadius: '4px' }}
                  />
                )}
                <div>
                  <strong>{book.title}</strong><br />
                  <span>{book.author_name?.join(', ') || 'Unknown Author'}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results yet. Try searching for a book!</p>
        )}
      </div>
    </div>
  );
}

export default App;
