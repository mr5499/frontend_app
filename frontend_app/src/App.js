import React from 'react';
import { Header } from './components/Header';
import { TotalRefuelingExpenses } from './components/TotalRefuelingExpenses';
import './App.css';
import './Dropdown.css'
import { TotalLitres } from './components/TotalLitres';
import { RefuelingExpenseList } from './components/RefuelingExpenseList';
import { AddRefuelingExpense } from './components/AddRefuelingExpense';
import { GlobalProvider } from './context/GlobalState';
import { TotalDistance } from './components/TotalDistance';
import { AvgExpense } from './components/AvgExpenses';
import { AvgConsumption } from './components/AvgConsumption';
import { CarSelector } from './components/CarSelector';
import { RechargingExpenseList } from './components/RechargingExpenseList';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <CarSelector />
        <TotalRefuelingExpenses />
        <TotalLitres />
        <TotalDistance />
        <AvgExpense />
        <AvgConsumption />
        <RefuelingExpenseList />
        <RechargingExpenseList />
        <AddRefuelingExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;

//this is just a comment for test
