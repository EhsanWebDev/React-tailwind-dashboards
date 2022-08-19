import React, { useState } from 'react'
import logo from "./assets/gamesLogo.svg"
import hero from "./assets/hero.png"

import { DownloadIcon, FireIcon, FriendsIcon, HomeIcon, LiveIcon, MenuIcon, SettingsIcon } from './assets/icons/SVGs'
import SidebarItem from './components/SidebarItem'


const GamesMode = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=' bg-black relative '>
            {/* Sidebar */}
            <div className={`${isOpen ? "w-64" : "w-12 lg:w-20"} z-10  fixed left-0 top-0 py-8 h-screen bg-black border-r border-r-slate-50/20 flex flex-col duration-300 ease`}>
                <div className=''>
                    {isOpen && <img src={logo} alt="Games logo" className='duration-300 mb-8 pr-20 pl-4' />}
                    {/* Icons */}
                    <SidebarItem Icon={() => <HomeIcon className={`${isOpen ? "flex-none w-5 h-5 md:w-6 md:h-6 " : "flex-1"}`} />} title="Home" isOpen={isOpen} />
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
                <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 cursor-pointer text-slate-900 bg-white rounded-full ${isOpen ? "rotate-180" : "rotate-0"} duration-500 absolute -right-2 top-4`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            <div className='pt-8 pl-8  mx-auto max-w-7xl z-0 relative'>
                <div className=' hidden md:mx-auto md:max-w-2xl md:flex md:justify-between md:items-center lg:max-w-3xl xl:max-w-6xl'>
                    <div className='flex items-center space-x-3'>
                        <button className=' px-4 py-2 text-white bg-blue-600 font-medium rounded-full'>Discover</button>
                        <button className=' p-2 text-slate-400   rounded-full'>Browse</button>
                        <button className=' p-2 text-slate-400   rounded-full'>Wishlist</button>
                    </div>

                    <div className='items-center space-x-6 hidden md:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>

                        <input type="text" placeholder='Search' className={`bg-gray-900 text-white placeholder:text-gray-400 px-4 duration-300 max-w-md  md:w-44 lg:w-80 rounded-full py-2 text-sm outline-none focus:ring-4 focus:ring-blue-600 `} />
                    </div>
                </div>
                <div className='flex flex-col max-w-sm mx-auto md:max-w-2xl md:mx-auto md:mt-8 lg:max-w-3xl  xl:max-w-6xl xl:flex-row'>
                    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.9)), url(${hero})` }} className={` bg-cover flex-1 rounded-lg`}>
                        <div className='px-7 py-4 flex flex-col justify-center h-full lg:h-96 xl:h-full '>
                            <h2 className='text-white text-xl font-medium'>Fortnite</h2>
                            <div className='flex flex-col justify-end flex-1 items-start'>
                                <p className='text-white text-sm mb-1'>Update</p>
                                <h2 className='text-white text-2xl font-semibold mb-6 tracking-widest leading-9'>The hunt is on in Fortnite Chapter 2- <br /> Season 5: Zero Point.</h2>

                                <button className='p-4 flex items-center text-sm rounded-2xl duration-300 shadow-xl bg-blue-600 hover:bg-blue-500 text-white mb-4'>
                                    Play for free
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>



                        </div>

                    </div>
                    <div className=' bg-gray-900 h-full rounded-r-xl flex-[0.15]  px-3 py-3 space-y-8'>
                        <div className='flex items-center'>
                            <img src="./assets/game1.png" alt="" className=' object-cover mr-3' />
                            <h4 className='text-white text-sm '>Fortnite</h4>
                        </div>
                        <div className='flex items-center'>
                            <img src="./assets/game1.png" alt="" className=' object-cover mr-3' />
                            <h4 className='text-white text-sm '>Rocket League</h4>
                        </div>
                        <div className='flex items-center'>
                            <img src="./assets/game1.png" alt="" className=' object-cover mr-3' />
                            <h4 className='text-white text-sm '>The Escapists 2</h4>
                        </div>
                        <div className='flex items-center'>
                            <img src="./assets/game1.png" alt="" className=' object-cover mr-3' />
                            <h4 className='text-white text-sm '>The Long Dark</h4>
                        </div>
                        <div className='flex items-center'>
                            <img src="./assets/game1.png" alt="" className=' object-cover mr-3' />
                            <h4 className='text-white text-sm break-words'>Warhammer: Vermintide 2</h4>
                        </div>
                        <div className='flex items-center'>
                            <img src="./assets/game1.png" alt="" className=' object-cover mr-3' />
                            <h4 className='text-white text-sm '>Fortnite</h4>
                        </div>


                    </div>
                </div>

                {/* Sale */}
                <div className=' mt-10'>
                    <div className='flex max-w-sm mx-auto    xl:max-w-6xl  md:max-w-2xl md:mx-auto lg:max-w-3xl items-center justify-between'>
                        <h4 className='text-white text-sm'>Games on sale</h4>

                        <div className='flex items-center space-x-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className='grid grid-col-1 place-items-center md:place-items-start gap-x-10 md:max-w-2xl md:mx-auto md:grid-cols-3 lg:grid-cols-3 lg:max-w-3xl lg:gap-x-20 xl:grid-cols-4 xl:max-w-6xl xl:gap-x-32'>
                        <div className='my-7'>
                            <div>
                                <img src="./assets/game2.png" alt="game" />
                            </div>
                            <h4 className='text-white mt-4 font-sans'>Valheim</h4>
                            <p className=' text-gray-500'>Action games</p>
                            <p className='text-white font-medium'>$8.15</p>
                        </div>
                        <div className='my-7 overflow-hidden'>
                            <div>
                                <img src="./assets/game3.png" alt="game" />
                            </div>
                            <h4 className='text-white mt-4 font-sans uppercase truncate '>Bioshock</h4>
                            <p className=' text-gray-500'>Action, RPG</p>
                            <div className='flex items-center space-x-3'>
                                <p className='bg-green-300 rounded-md px-0.5 text-sm'>-80%</p>
                                <p className='text-gray-400 font-medium line-through'>$50</p>
                                <p className='text-white font-medium'>$8.67</p>
                            </div>

                        </div>
                        <div className='my-7'>
                            <div>
                                <img src="./assets/game5.png" alt="game" />
                            </div>
                            <h4 className='text-white mt-4 font-sans'>Unravel Two</h4>
                            <p className=' text-gray-500'>Adventure games</p>
                            <p className='text-white font-medium'>$20.38</p>
                        </div>

                        <div className='my-7 overflow-hidden'>
                            <div>
                                <img src="./assets/game6.png" alt="game" />
                            </div>
                            <h4 className='text-white mt-4 font-sans uppercase truncate '>Tic Tock</h4>
                            <p className=' text-gray-500'>Indie games</p>
                            <div className='flex items-center space-x-3'>
                                <p className='bg-green-300 rounded-md px-0.5 text-sm'>-60%</p>
                                <p className='text-gray-400 font-medium line-through'>$3.47</p>
                                <p className='text-white font-medium'>$1.39</p>
                            </div>

                        </div>
                        <div className='my-7'>
                            <div>
                                <img src="./assets/game4.png" alt="game" />
                            </div>
                            <h4 className='text-white mt-4 font-sans uppercase'>Hitman 3</h4>
                            <p className=' text-gray-500'>Action games</p>
                            <p className='text-white font-medium'>$23.99</p>
                        </div>
                        <div className='my-7'>
                            <div>
                                <img src="./assets/game4.png" alt="game" />
                            </div>
                            <h4 className='text-white mt-4 font-sans uppercase'>Hitman 3</h4>
                            <p className=' text-gray-500'>Action games</p>
                            <p className='text-white font-medium'>$23.99</p>
                        </div>

                    </div>


                </div>



            </div>
        </div>
    )
}

export default GamesMode