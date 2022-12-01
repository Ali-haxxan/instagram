import Image from "next/image"
import instagram from '../assets/logo.png'
import {SearchIcon} from '@heroicons/react/outline'
import {PlusCircleIcon , HomeIcon} from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white top-0 fixed w-full">
      <div className="flex justify-between max-w-7xl mx-7 xl:mx-auto p-2">
        <div className="relative w-24 h-8 lg-inline-grid">

          <Image src={instagram} layout="fill" objectFit="contain" />
        </div>
        <div className="relative mt-1 p-1 pl-2 rounded-md sm:text-sm border-solid border-[1.2px] border-gray-300 flex bg-gray-50">
        <SearchIcon className='h-5 w-5 text-gray-400'/>
          <input type='text' placeholder="search" classname="headerinput pl-1 bg-gray-50 focus:outline-none"  />
        <PlusCircleIcon className='h-5 w-5 text-gray-400 rotate-45'/>

        </div>
      </div>
    </div>
  )
}

export default Header