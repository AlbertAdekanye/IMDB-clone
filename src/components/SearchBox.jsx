'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents page refresh
    router.push(`/search?q=${search}`);
  }

  return (
    <div className='flex flex-col items-center'>
      <form className='flex items-center gap-2 mt-4 mx-auto' onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for a movie'
          className='w-full p-2 border border-amber-600 rounded-lg outline-none bg-transparent text-white flex-1 text-center'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type='submit'
          className='px-4 py-2 bg-amber-600 text-white rounded-lg disabled:bg-amber-600 text-center'
          disabled={!search.trim()}>
          Search
        </button>
      </form>
      {/* Display Search Results */}
      <div className='mt-4'>
        {results.length > 0 ? (
          <ul>
            {results.map((movie) => (
              <li key={movie.id} className='text-white'>{movie.title}</li>
            ))}
          </ul>
        ) : (
          search && <p className='text-gray-400'>No results found.</p>
        )}
      </div>
    </div>
  );
}
