import React, { useState } from 'react'
import logo from "./assets/gamesLogo.svg"

import { DownloadIcon, FireIcon, FriendsIcon, HomeIcon, LiveIcon, MenuIcon, SettingsIcon } from './assets/icons/SVGs'
import SidebarItem from './components/SidebarItem'


const GamesMode = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-slate-900 flex'>
            {/* Sidebar */}
            <div className={`${isOpen ? "w-56" : "w-20"} py-8 h-screen bg-slate-900 border-r border-r-slate-50/20 flex flex-col duration-300 ease relative`}>
                <div className=''>
                    {isOpen && <img src={logo} alt="Games logo" className='duration-300 mb-8 pr-20 pl-4' />}
                    {/* Icons */}
                    <SidebarItem Icon={() => <HomeIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6 fill-gray-400 " : "flex-1"}`} />} title="Home" isOpen={isOpen} />
                    <SidebarItem Icon={() => <FireIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6" : "flex-1"}`} />} title="Store" isOpen={isOpen} />
                    <SidebarItem Icon={() => <MenuIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6" : "flex-1"}`} />} title="Library" isOpen={isOpen} />
                    <SidebarItem Icon={() => <FriendsIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6" : "flex-1"}`} />} title="Friends" isOpen={isOpen} />
                    <SidebarItem Icon={() => <LiveIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6" : "flex-1"}`} />} title="Live" isOpen={isOpen} />

                </div>



                <div className=' flex-1 flex flex-col justify-end'>
                    <SidebarItem Icon={() => <DownloadIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6" : "flex-1"}`} />} title="Downloads" isOpen={isOpen} />
                    <SidebarItem Icon={() => <SettingsIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6" : "flex-1"}`} />} title="Settings" isOpen={isOpen} />

                    <div className={`mt-4 transition-all duration-300 mx-3 pl-4 hover:bg-gray-700 py-3 rounded-full hover:cursor-pointer flex items-center`}>
                        <div className='relative'>
                            <img src="./assets/mypic.jpeg" alt="Profile Pic" className='rounded-full w-6 h-6' />
                            <div className='h-2 w-2 bg-green-500 rounded-full absolute -right-1 bottom-0'></div>
                        </div>
                        <p className={`text-slate-400 ml-3 ${!isOpen && "hidden"} duration-500`}>Ehsan</p>
                    </div>


                </div>
                <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 cursor-pointer text-slate-900 bg-white rounded-full ${isOpen ? "rotate-180" : "rotate-0"} duration-500 absolute -right-3`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            <div className='pt-8 px-6 md:flex-1'>
                <div className=' hidden md:flex md:justify-between md:items-center'>
                    <div className='flex items-center space-x-3'>
                        <button className=' px-4 py-2 text-white bg-blue-600 font-medium rounded-full'>Discover</button>
                        <button className=' p-2 text-slate-400   rounded-full'>Browse</button>
                        <button className=' p-2 text-slate-400   rounded-full'>Wishlist</button>
                    </div>

                    <div className='items-center space-x-6 hidden md:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>

                        <input type="text" placeholder='Search' className={`bg-gray-700 placeholder:text-gray-400 px-4 duration-300 max-w-md  md:w-44 lg:w-80 rounded-full py-2 text-sm outline-none focus:ring-4 focus:ring-blue-600 `} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default GamesMode