import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Dropdown from './Dropdown'


export const ExpenseSelection = () => {
    const { selection } = useContext(GlobalContext)

    return (
        <>
        <div className='form-control'>
            <Dropdown placeHolder='Show expense by car' cars={selection} />
        </div>
        </>
    );
}
