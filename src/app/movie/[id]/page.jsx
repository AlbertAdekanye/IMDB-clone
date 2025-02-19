import Image from 'next/image';
import React from 'react';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch movie data');
  }
  const movie = await res.json();

  return (
    <div className="w-full p-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {movie.backdrop_path || movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title || 'Movie Image'}
            width={800}
            height={450}
            className="w-full h-auto object-cover "
          />
        ) : (
          <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">No Image Available</span>
          </div>
        )}
        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{movie.title || movie.original_title || 'Untitled'}</h2>
          <p className="text-gray-300 mb-4">{movie.overview || 'No description available.'}</p>
          <p className="text-sm mb-1"><strong>Release Date:</strong> {movie.release_date || 'Unknown'}</p>
          <p className="text-sm"><strong>Rating:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}