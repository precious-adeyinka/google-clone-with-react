// Next Components
import Head from 'next/head';
import {useRouter} from 'next/router';
// React
import React from 'react';
// Components
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
// Dummy Data
import Response from '../Response';

const Search = ({ results }) => {
  // Router
  const router = useRouter();
 
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
         {/* Font Awesome */}
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search;

export async function getServerSideProps (context) {
  // Logic goes here...
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : 
  await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX_KEY}&q=${context.query.term}&start=${startIndex}`)
  .then(res => res.json());

  // After the SERVER has rendered.. Pass the result to the client
  return {
    props: {
      results: data
    }
  }
}