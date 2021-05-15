// Import Next Components
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// React
import { useRef } from 'react';


// components
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

// Import Hero Icons
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

export default function Home() {
  // Refs
  const searchInputRef = useRef(null);
  // Router
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;
    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      {/* Head */}
      <Head>
        <title>Google</title>
        <meta name="description" content="A Google Clone" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
 
      {/* Header */}
      <header className="flex w-full justify-between py-2 px-4 text-sm text-gray-700">
        {/* Left */}
        {/* <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>   */}
        {/* Right */}
        <div className="flex space-x-4 items-center ml-auto">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icons */}
          {/* <ViewGridIcon className="h-10 w-10 text-gray-500 text-sm cursor-pointer hover:bg-gray-100 rounded-full p-2" /> */}
          <i className="fa fa-th text-center text-lg h-10 w-10 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full p-2"></i>
          {/* Avatar */}
          {/* <Avatar url={'https://coaching.papareact.com/ai9'} /> */}
          <Avatar url={'/pflash.jpg'} />
        </div>
      </header>

      {/* Body */}
      <form className="flex items-center flex-col  mt-[7rem] flex-grow w-4/5">
        <Image
          src={'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
          height={100}
          width={300}
        />
        <div className="w-full flex justify-center items-center hover:shadow-lg 
        focus-within:shadow-lg mt-5 max-w-md rounded-full border 
        border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon  className="h-5 text-gray-500 ml-3 cursor-pointer" />
        </div>

        <div className="flex flex-col justify-center items-center mt-8 space-y-2 w-1/2 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="tertiaryBtn">Google Search</button>
          <button onClick={search} className="tertiaryBtn">I'm Feeling Lucky</button>
        </div>

        <div className="flex w-screen md:max-w-lg justify-center md:justify-between items-center p-3 my-3 space-x-3 md:space-x-2 text-[11px] md:text-sm text-gray-900">
          <div>Google offered in:</div>
          <div className="langLinks">Hausa</div>
          <div className="langLinks">Igbo</div>
          <div className="langLinks">Hausa</div>
          <div className="langLinks">Èdè Yorùbá</div>
          <div className="langLinks">Nigerian Pidgin</div>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
