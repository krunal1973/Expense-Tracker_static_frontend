import React from "react";
import Navbar from "../components/layout/Navbar";
import SummaryCard from "../components/dashboard/SummaryCard";
import AddTransaction from "../components/dashboard/AddTransaction";
import TransactionCard from "../components/dashboard/TransactionCard";
import { transactions } from "../data/dummyData";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          <SummaryCard title="Total Balance" amount="14500" color="text-blue-600" />
          <SummaryCard title="Total Income" amount="15000" color="text-green-600" />
          <SummaryCard title="Total Expense" amount="500" color="text-red-600" />

        </div>


        <AddTransaction />

        <div className="mt-8">

          <h2 className="text-lg font-semibold mb-4">
            Transactions
          </h2>

          <div className="flex flex-col gap-4">
            {transactions.map((item) => (
              <TransactionCard
                key={item.id}
                title={item.title}
                amount={item.amount}
                type={item.type}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;