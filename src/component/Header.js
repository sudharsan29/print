import React from 'react'

function Header({handleButtonClick}) {
  return (
    <div>
        <header className='flex flex-col items-center justify-center mb-5'>
<div>
        <h1 className='font-bold uppercase tracking wide text-4xl mb-3'>Invoicer</h1>
        </div>
        {/* <div>
        <ul className='flex items-center justify-betwen flex-wrap relative left-[530px]'>
           
         <li>
    <button
      onClick={handleButtonClick}
      className='mt-5 bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 user-select-none'
    >
      Print
    </button>
  </li>
  <li className='mx-2'>
    <button
      className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 user-select-none'
    >
      Download
    </button>
  </li>
  <li>
    <button
      className='mt-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 user-select-none'
    >
      Send
    </button>
  </li>
        </ul>
        </div> */}
        </header>
    </div>
  )
}

export default Header

 {/* <li><button onClick={handleButtonClick} className='mt-5 bg-gray-500 text-white font-bold py-2 px-8  rounded shadow  boder-2  boder-blue-500
        hover:bg-transparent hover:text-gray-500 transition-all duration-300 user-select:none'>print</button></li>
            <li className='mx-2'><button className='mt-5 bg-blue-500 text-white font-bold py-2 px-8  rounded shadow  boder-2  boder-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300'>download</button></li>
            <li><button className='mt-5 bg-green-500 text-white font-bold py-2 px-8  rounded shadow  boder-2  boder-blue-500
        hover:bg-transparent hover:text-green-500 transition-all duration-300'>send</button></li> */}