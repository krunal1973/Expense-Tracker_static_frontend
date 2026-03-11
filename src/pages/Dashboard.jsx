import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import SummaryCard from "../components/dashboard/SummaryCard";
import AddTransaction from "../components/dashboard/AddTransaction";
import TransactionCard from "../components/dashboard/TransactionCard";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import { getTransactions, getSummary } from "../api/transaction.api";

function Dashboard() {

  const [transactions, setTransactions] = useState([]);

  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  const fetchData = async () => {
    try {

      const transactionRes = await getTransactions();
      setTransactions(transactionRes.data.data.transactions);

      const summaryRes = await getSummary();
      setSummary(summaryRes.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Excel Download Function
  const downloadExcel = async () => {
    try {

      const token = localStorage.getItem("token");

      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;

      const res = await axios.get(
        `http://localhost:3000/api/export/excel?year=${year}&month=${month}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: "blob"
        }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", `transactions-${year}-${month}.xlsx`);

      document.body.appendChild(link);
      link.click();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          <SummaryCard
            title="Total Balance"
            amount={summary.balance}
            color="text-blue-600"
          />

          <SummaryCard
            title="Total Income"
            amount={summary.totalIncome}
            color="text-green-600"
          />

          <SummaryCard
            title="Total Expense"
            amount={summary.totalExpense}
            color="text-red-600"
          />

        </div>

        {/* Add Transaction */}
        <AddTransaction refreshDashboard={fetchData} />

        {/* Expense Chart */}
        <ExpenseChart transactions={transactions} />

        {/* Download Excel Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={downloadExcel}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Download Excel
          </button>
        </div>

        <div className="mt-6">

          <h2 className="text-lg font-semibold mb-4">
            Transactions
          </h2>

          <div className="flex flex-col gap-4">

            {transactions.length === 0 ? (

              <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
                No transactions yet. Add your first income or expense.
              </div>

            ) : (

              transactions.map((item) => (
                <TransactionCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  amount={item.amount}
                  type={item.type}
                  date={item.date}
                  refreshDashboard={fetchData}
                />
              ))

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;