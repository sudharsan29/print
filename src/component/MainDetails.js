import React from 'react'

function MainDetails({name,address}) {
  return (
    <div>
         <section  className='flex flex-col items-end justify-end'>
          {/* <input
          type='text'
          name='text'
          id='text'
          placeholder='enter your name'
          required
          /> */}
          <h2 className='font-bold text-xl uppercase md:text-4xl'>{name}</h2>
          <p>{address}</p>

        </section>
    </div>
  )
}

export default MainDetails