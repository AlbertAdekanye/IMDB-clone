import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 hover:shadow-slate-500 sm:shadow-sm rounded-lg sm:border sm:border-slate-400 sm:m-2'>
      <Link href={`/movie/${result.id}`} passHref>
        <div>
          <Image
            src={
              result.backdrop_path || result.poster_path
                ? `https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`
                : '/placeholder.jpg' // Add a placeholder image for safety
            }
            alt={result.title || result.name || 'Movie Image'}
            width={500}
            height={300}
            className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
          />
          <div className='p-2'>
            <p className='line-clamp-2 text-md'>{result.overview || 'No description available.'}</p>
            <h2 className='text-lg font-bold truncate'>{result.title || result.name || 'Untitled'}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>
              {result.media_type && `${result.media_type} • `}
              {result.release_date || result.first_air_date || 'Unknown Date'} •
              <span className='text-yellow-500 ml-1'>{result.vote_count || 0}</span> votes •
              <BsFillHandThumbsUpFill className='h-5 inline mr-1 ml-2' />
              <span className='text-yellow-500'>{result.vote_average || 'N/A'}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
