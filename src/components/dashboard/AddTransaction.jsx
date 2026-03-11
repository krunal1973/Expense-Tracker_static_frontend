import React, { useState } from "react";
import { createTransaction } from "../../api/transaction.api";

function AddTransaction({ refreshDashboard }) {

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense"
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createTransaction(formData);

      // clear form
      setFormData({
        title: "",
        amount: "",
        type: "expense"
      });

      // refresh dashboard
      refreshDashboard();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 mt-8">

      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 w-full"
        >
          Add
        </button>

      </form>

    </div>
  );
}

export default AddTransaction;