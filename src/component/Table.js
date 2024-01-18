import React from 'react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
function Table({list, total}) {
  return (
    <div>
      <>
      <table className='w-[100%] mb-10'>
        <thead>
          <tr className='bg-gray-100 p-1'>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
        <tbody  className='w-[100%]'>
        {
          list.map(({ id, description, price, amount, quantity }) => (
          <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
           ))
          }
        </tbody>

      </table>
      <div>
      <h2 className='flex items-end justify-end text-gray-800 text-4xl'><MdOutlineCurrencyRupee />{total.toLocaleString()}</h2>
      </div>
      </>
    </div>
  )
}

export default Table