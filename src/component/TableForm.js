import React, { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
function TableForm({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList, total, setTotal }) {
const [isEditing, setIsEditing]=useState(false)
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }
    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])




  useEffect(() => {
    let rows= document.querySelectorAll(".amount")
    let sum =0
    for(let i=0; i<rows.length; i++){
      if(rows[i].className === "amount"){
        sum += isNaN(rows[i].innerHTML) ? 0: parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })




  const deleteRow =(id) =>{
    setList(list.filter((row) =>row.id !==id))
    setTotal("0");
  }

const editRow =(id) =>{
  const editingRow =list.find((row) =>row.id ===id)
  setList(list.filter((row) =>row.id !==id))
  setIsEditing(true)
  setDescription(editingRow.description)
  setQuantity(editingRow.quantity)
  setPrice(editingRow.price)

}


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!description && ! quantity && !price ) 
    {
alert("please fill in all input")
    } 
    else {
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list, newItems])
    setIsEditing(false);
    // console.log(list);
  }
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Invoice Date"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="quantity"
            autoComplete="off"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="price"
            autoComplete="off"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Amout">Amount</label>
          {/* <input
                    type="text"
                    name="Amount"
                    id="Amount"
                    placeholder="Amount"
                    autoComplete="off"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  /> */}
          {amount}
        </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300 user-select-none"
      >
       {isEditing ? "Editing Row Item":" Add Item"}
      </button>
    </form>
      {/* <ul>
        {
          list.map(({ id, description, price, amount, quantity }) => (
            <React.Fragment key={id}>
              <li>{description}</li>
              <li>{quantity}</li>
              <li>{price}</li>
              <li>{amount}</li>
            </React.Fragment>
          ))
        }
      </ul> */}
      
       <table className='w-[1520px]'>
        <React.Fragment>
        <thead>
          <tr className='bg-gray-100 p-1'>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
            <td className='font-bold'>Actions</td>
          </tr>
        </thead>
        <tbody  className='w-[100%]'>
        {
          list.map(({ id, description, price, amount, quantity }) => (
            <tr key={id}>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td className='amount'>{amount}</td>
            <td className='w-[20px]'><button  onClick={() => deleteRow(id)}><AiOutlineDelete /></button></td>
            <td><button onClick={() => editRow(id)}> <AiOutlineEdit /></button></td>
           
          </tr>
           ))
          }
        </tbody>

        </React.Fragment>
      </table>
      <div>
        <h2 className='text-gray-800 text-4xl'>{total.toLocaleString()}</h2>
      </div>
    </div>
  )
}

export default TableForm