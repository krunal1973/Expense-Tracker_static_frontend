import React from "react";
import { deleteTransaction } from "../../api/transaction.api";

function TransactionCard({ id, title, amount, type, date, refreshDashboard }) {

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

    try {

      await deleteTransaction(id);
      refreshDashboard();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">

      <div>

        <h3 className="font-semibold text-gray-700">
          {title}
        </h3>

        {/* Date */}
        <p className="text-xs text-gray-500">
          {date ? new Date(date).toLocaleDateString("en-IN") : ""}
        </p>

        {/* Type Badge */}
        <span
          className={`text-xs px-2 py-1 rounded ${
            type === "income"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {type}
        </span>

        {/* Amount */}
        <p
          className={`text-sm font-bold mt-1 ${
            type === "income" ? "text-green-600" : "text-red-600"
          }`}
        >
          {type === "income" ? "+" : "-"}₹
          {amount.toLocaleString("en-IN")}
        </p>

      </div>

      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>

    </div>
  );
}

export default TransactionCard;