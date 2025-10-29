import React from 'react';

function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src={coverUrl} alt={book.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-600">Author: {book.author_name?.[0] || 'Unknown'}</p>
      <p className="text-sm text-gray-600">Year: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
