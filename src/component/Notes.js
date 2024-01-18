import React from 'react'

function Notes({notes}) {
  return (
    <div>
         <section className='mt-10 mb-5'>
        <p className='lg:w-1/2'> {notes}</p>
        </section>
    </div>
  )
}

export default Notes