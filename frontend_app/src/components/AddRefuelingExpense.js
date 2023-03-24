import React, {useState} from 'react'

export const AddRefuelingExpense = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

  return (
    <>
        <h3>Add a new refueling expense</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." />
            </div>
            <div class="form-control">
                <label htmlFor="amount_of_litres">
                    Amount of litres <br />
                </label>
                <input type="number" placeholder="Enter amount..." />
            </div>
            <button className='btn'>Add expense</button>
        </form>
    </>
  )
}
