import React, { useState, useRef } from 'react';
import Footer from './Footer';
import Notes from './Notes';
import Table from './Table';
import Header from './Header';
import MainDetails from './MainDetails';
import ClientDatails from './ClientDatails';
import Dates from './Dates';
import './Allpage.css';
import TableForm from './TableForm';
import ReactToPrint from 'react-to-print';
import html2pdf from 'html2pdf.js';

const handleButtonClick = () => {
  window.print()
}

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name,
    setName] = useState("")
  const [address,
    setAddress] = useState("")
  const [email,
    setEmail] = useState("")
  const [phone,
    setPhone] = useState("")
  const [bankName,
    setBankName] = useState("")
  const [bankAccount,
    setBankAccount] = useState("")
  const [clientName,
    setClientName] = useState("")
  const [website,
    setWebsite] = useState("")
  const [clientAddress,
    setClientAddress] = useState("")
  const [invoiceNumber,
    setInvoiceNumber] = useState("")
  const [invoiceDate,
    setInvoiceDate] = useState("")
  const [dueDate,
    setDueDate] = useState("")
  const [notes,
    setNotes] = useState("")
    const[description, setDescription]=useState("")
    const[quantity, setQuantity]=useState("")
    const[price, setPrice]=useState("")
    const[amount, setAmount]=useState("")
    const[list, setList]=useState([])
    const[total, setTotal]=useState(0)
    const componentRef = useRef()

    const downloadButtonClick = () => {
      const content = componentRef.current;
      
      html2pdf(content, {
        margin: 10,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      });
    }
    
  return (
    <div>
      <div className='bg-slate-50 w-[1519px]'>
        <main className='white w-[1440px]'>
         
          {showInvoice ? (
            <>
             <ReactToPrint 
          trigger={() => <button 
            className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300 
             user-select-none'
          >Print</button>}
          content={() =>componentRef.current}
          />
           <button
                  onClick={() => downloadButtonClick(componentRef)}
                  className='bg-green-500 text-white font-bold py-2 px-8   rounded shadow  border-2  border-green-500
        hover:bg-transparent hover:text-green-500 transition-all duration-300 user-select-none'
                >
                  Download
                </button>
          <div ref={componentRef} className='p-5'>
            <Header handleButtonClick={handleButtonClick} />
            <MainDetails name={name} address={address} />
            <ClientDatails clientName={clientName} clientAddress={clientAddress} />

            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <Table
             description={description}
             quantity={quantity}
             price={price}
             amount={amount}
             list={list}
             setList={setList}
             total={total}
             setTotal={setTotal}
            />
            <Notes notes={notes} />

            <Footer
            name={name}
            address={address}
            website={website}
            email={email}
            phone={phone}
            bankAccount={bankAccount}
            bankName={bankName}
             />
             </div>
            <div>
                <button onClick={() => setShowInvoice(false)} className='bg-blue-500 text-white font-bold py-2 px-8   rounded shadow  boder-2  boder-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300 user-select-none'>Edit</button>
              </div>
              </>
          ) : (
            <>
               <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    maxLength={56}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    maxLength={96}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    maxLength={96}
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                
<article>
  <TableForm 
  description={description}
  setDescription={setDescription}
  quantity={quantity}
  setQuantity={setQuantity}
  price={price}
  setPrice={setPrice}
  amount={amount}
  setAmount={setAmount}
  list={list}
  setList={setList}
  total={total}
  setTotal={setTotal}
  />
</article>

                <div className="flex flex-col">
                  <label htmlFor="notes">Additional notes</label>
                  <textarea
                    name="notes"
                    id="notes"
                    cols='30'
                    rows='10'
                    placeholder="Additional Notes to the clients"
                    autoComplete="off"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </article>
              
              </div>
  
              <div>
                <button onClick={() => setShowInvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8   rounded shadow  boder-2  boder-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300 user-select-none'>Preview Invoice</button>
              </div>
            </>
          )}
        </main>


      </div>
    </div>
  )
}

export default App