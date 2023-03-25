import React from 'react';
import { Header } from './components/Header';
import { TotalRefuelingExpenses } from './components/TotalRefuelingExpenses';
import './App.css';
import { TotalLitres } from './components/TotalLitres';
import { RefuelingExpenseList } from './components/RefuelingExpenseList';
import { AddRefuelingExpense } from './components/AddRefuelingExpense';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <TotalRefuelingExpenses />
        <TotalLitres />
        <RefuelingExpenseList />
        <AddRefuelingExpense />
      </div>
    </div>
  );
}

export default App;

//test comment
