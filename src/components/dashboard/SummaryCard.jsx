import React from "react";

function SummaryCard ({title,amount,color}){
    return(
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex flex-col gap-2 hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm sm:text-base">
                {title}
            </h2>

            <p className={`font-bold text-xl sm:text-2xl md:text-3xl ${color}`}>
                ₹{amount}
            </p>
        </div>
    );
}

export default SummaryCard;