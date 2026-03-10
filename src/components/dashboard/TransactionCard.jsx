import React from "react";

function TransactionCard({ title, amount, type }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">

      <div>
        <h3 className="font-semibold text-gray-700">{title}</h3>

        <p
          className={`text-sm font-bold ${
            type === "income" ? "text-green-600" : "text-red-600"
          }`}
        >
          {type === "income" ? "+" : "-"}₹{amount}
        </p>
      </div>

      <button className="text-red-500 hover:text-red-700 font-medium">
        Delete
      </button>

    </div>
  );
}

export default TransactionCard;