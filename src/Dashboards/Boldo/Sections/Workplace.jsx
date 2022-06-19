import React from 'react'

const Workplace = () => {
    return (
        <div className=' max-w-5xl mx-auto mb-20 px-4'>
            <div>
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="workplace" className='w-full object-cover h-80 rounded-3xl' />
            </div>

            <div className='flex flex-col lg:flex-row  lg:items-center space-y-8 lg:space-x-4 mt-8 '>
                <p className='text-2xl lg:text-4xl tracking-wide leading-normal lg:flex-[0.6] font-light lg:pr-20 '>We connect our customers with the best, and help them keep up-and stay open.</p>
                <div className='lg:flex-[0.4] flex flex-col'>
                    <div className='flex items-center mb-4 flex-1 justify-between pb-2 border-b-2'>
                        <p>We connect our customers with the best?</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex items-center mb-4 flex-1 justify-between pb-2 border-b-2'>
                        <p>We connect our customers with the best?</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Workplace