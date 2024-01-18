import React from 'react'

function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <div>

<article className='my-10 flex item-end justify-end'>
            <ul>
              <li className='p-1'>
                <span className='font-bold'>Invoice number:</span>{invoiceNumber}</li>
              <li className='p-1'><span className='font-bold'>Invoice Date:</span>{invoiceDate}</li>
              <li className='p-1'><span className='font-bold'>Due Date:</span>{dueDate}</li>
            </ul>
          </article>
    </div>
  )
}

export default Dates
