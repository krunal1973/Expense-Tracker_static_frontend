import React from "react";

function AddTransaction() {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 mt-8">

      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Add Transaction
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Title"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Amount"
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Income</option>
          <option>Expense</option>
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