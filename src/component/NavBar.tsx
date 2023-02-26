import React,{useState} from 'react';
import WalletImg from '../assets/images/WalletButton.svg'
import {GrLanguage} from 'react-icons/gr'

export default function NavBar() {
  const [langDrop, setLangDrop] = useState(false)
  const changeLangDrop = () => {
    setLangDrop(!langDrop)
  }
  return (
        <nav className="px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 bg-opacity-100">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                {/* <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a> */}
                <div className="flex md:order-2">
                    {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}

                    <img src={WalletImg} className='object-contain h-auto max-w-full xs:h-10  mr-3 md:mr-0'/>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-48" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white text-base" aria-current="page">ЖЕТОН</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base">NFT</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base">Майниг</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base">Игровой</a>
                    </li>
                    <li className='mx-3'>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base">Team</a>
                    </li>
                    <li className='mx-3'>
                    <div className="inline-flex">
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base" onClick={() => setLangDrop(!langDrop)}>
                            <GrLanguage className='my-1 text-gray-400'/>
                        </a>

                        <div className={'relative ' + (langDrop ? 'hidden' : '')}>
                            <div className="absolute left-0 z-10 w-24 mt-4  origin-top-right  bg-white border border-gray-100 rounded-md shadow-lg">
                                <div className="p-2">
                                    <a
                                        href="#"
                                        className="block pl-2 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        English
                                    </a>
                                    <a
                                        href="#"
                                        className="block pl-2 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        Hindi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>

  )
}
