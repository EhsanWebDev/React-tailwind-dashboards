import React from 'react'

const SidebarItem = ({ isOpen, Icon = () => (<div />), title }) => {
    return (
        <div title={title} className={`mt-4 ${isOpen ? "pl-3" : "pl-0"}  mx-3 transition-all duration-300  hover:bg-gray-700 py-3 rounded-full group hover:cursor-pointer `}>
            <div className='flex items-center'>
                <Icon />
                <p className={`text-slate-400 text-sm ml-3 ${!isOpen && "hidden"} group-hover:text-white duration-500`}>{title}</p>
            </div>
        </div>
    )
}

export default SidebarItem