import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function ExpenseChart({ transactions }) {

  const expenseData = transactions
    .filter((t) => t.type === "expense")
    .map((t) => ({
      name: t.title,
      value: t.amount
    }));

  const COLORS = ["#ef4444", "#f97316", "#f59e0b", "#22c55e", "#3b82f6"];

  if (expenseData.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8 flex flex-col items-center">

      <h2 className="text-lg font-semibold mb-4">
        Expense Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {expenseData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ExpenseChart;