import React from 'react';
import { Header } from './components/Header';
import { TotalRefuelingExpenses } from './components/TotalRefuelingExpenses';
import './App.css';
import { TotalLitres } from './components/TotalLitres';
import { RefuelingExpenseList } from './components/RefuelingExpenseList';
import { AddRefuelingExpense } from './components/AddRefuelingExpense';
import { GlobalProvider } from './context/GlobalState';
import { TotalDistance } from './components/TotalDistance';
import { AvgExpense } from './components/AvgExpenses';
import { AvgConsumption } from './components/AvgConsumption';
import { ExpenseSelection } from './components/ExpenseSelection';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <TotalRefuelingExpenses />
        <ExpenseSelection />
        <TotalLitres />
        <TotalDistance />
        <AvgExpense />
        <AvgConsumption />
        <RefuelingExpenseList />
        <AddRefuelingExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;

