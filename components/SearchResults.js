import React from 'react';

// components
import PaginationButtons from './PaginationButtons';

// NEXT Components
import Link from 'next/link';
import { useRouter } from 'next/router';


const SearchResults = ({ results }) => {
   // router
   const router = useRouter();
  //  const startIndex = Number(router.query.start) || 0;
   const startIndex = 0;

  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-4">About {results.searchInformation?.formattedTotalResults} 
       &nbsp;results ({results.searchInformation?.formattedSearchTime} seconds )</p>

      {results && results.searchInformation.formattedTotalResults === "0" ?
      (<div className="h-50 my-10 max-w-xl flex flex-col items-center justify-center text-lg text-gray-700">No More Results!
      <Link href={`/search?term=${router.query.term}&start=${startIndex}`}><p className="text-sm text-blue-500 hover:underline cursor-pointer d-block" >
      Click here to go back to the first page</p></Link></div>) : null}

      {results && results.items?.map(result => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a target="_self" href={result.link} className="text-sm" rel="noopener noreferrer">{result.formattedUrl}</a>
            <a href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      )) }

      <PaginationButtons />
    </div>
  )
}

export default SearchResults;