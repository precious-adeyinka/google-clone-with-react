// NEXT Components
import Image from 'next/image';
// React
import React, { useRef } from 'react';
// Router
import { useRouter } from 'next/router';
// Hero Icons
import { XIcon } from '@heroicons/react/solid';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

// components
import HeaderOptions from '../components/HeaderOptions';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';


const Header = () => {
  // router
  const router = useRouter();
  // Refs
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;
    router.push(`/search?term=${term}`);
  }


  return (
    <header className="sticky top-0 left-0 bg-white w-full">
     <div className="flex w-full p-6 items-center">
      <Image
          src={'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form className="flex flex-grow justify-center px-6 py-3 ml-10 mr-5 border border-gray-200 
        rounded-full shadow-lg max-w-3xl items-center">
          <input type="text" ref={searchInputRef} className="w-full flex-grow focus:outline-none" defaultValue={router.query.term} />
          <XIcon  className="h-7 sm:mr-3 text-gray-500 cursor-pointer 
          transiton duration-100 transform hover:scale-125" onClick={() => searchInputRef.current.value =""} />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex 
          cursor-pointer text-blue-500 border-l-2 pl-4 border-gray-300" /> 
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" onClick={search} />
          <button hidden type="submit" onClick={search}>Search</button>
        </form>
        <div className="flex ml-auto items-center justify-center">
          <i className="fa fa-th text-center mr-3 text-xl h-10 w-10 text-gray-500 
          cursor-pointer hover:bg-gray-100 rounded-full p-2 ml-auto"></i>
          <Avatar className="shadow-lg h-10" url={'/pflash.jpg'} />
        </div>
      </div>
      {/* Header Options */}
     <HeaderOptions />
    </header>
  )
}

export default Header;