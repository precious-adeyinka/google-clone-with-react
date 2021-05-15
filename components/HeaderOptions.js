import React from 'react';
// Components
import HeaderOption from './HeaderOption';
// Import Hero Icons
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon
} from '@heroicons/react/outline';

const HeaderOptions = () => {
  return (
    <div className="flex items-base w-full text-gray-700 justify-evenly 
    text-sm lg-text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/* Left */}
      <div className="flex space-x-4">
        <HeaderOption Icon={SearchIcon} title="All" Selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions;