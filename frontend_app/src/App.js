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
import { AvgExpenses } from './components/AvgExpenses';
import { AvgConsumption } from './components/AvgConsumption';
import { CarSelector } from './components/CarSelector';
import { CarSelectorForNewExpense } from './components/CarSelectorForNewExpense'
import { RechargingExpenseList } from './components/RechargingExpenseList';
import { TotalRechargingExpenses } from './components/TotalRechargingExpenses';
import { TotalKWh } from './components/TotalKWh';
import { TotalDistanceEV } from './components/TotalDistanceEV';
import { AvgExpensesEV } from './components/AvgExpensesEV'
import { AvgConsumptionEV } from './components/AvgConsumptionEV';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <CarSelector />
        <TotalRefuelingExpenses />
        <TotalRechargingExpenses />
        <TotalLitres />
        <TotalKWh />
        <TotalDistance />
        <TotalDistanceEV />
        <AvgExpenses />
        <AvgExpensesEV />
        <AvgConsumption />
        <AvgConsumptionEV />
        <CarSelectorForNewExpense />
        <AddRefuelingExpense />
        <RefuelingExpenseList />
        <RechargingExpenseList />
      </div>
    </GlobalProvider>
  );
}

export default App;

//this is just a comment for test
