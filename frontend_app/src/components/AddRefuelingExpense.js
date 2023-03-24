import React, {useState} from 'react'

export const AddRefuelingExpense = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [pricePerLiter, setPricePerLiter] = useState(1.99)

  return (
    <>
        <h3>Add a new refueling expense</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                 placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount_of_litres">
                    Amount of litres <br />
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                 placeholder="Enter amount..." />
            </div>
            <div className="form-control">
                <label htmlFor="price_per_liter">
                    Price per litre <br />
                </label>
                <input type="number" value={pricePerLiter} onChange={(e) => setPricePerLiter(e.target.value)}
                 placeholder="Enter amount..." />
            </div>
            <button className='btn'>Add expense</button>
        </form>
    </>
  )
}
