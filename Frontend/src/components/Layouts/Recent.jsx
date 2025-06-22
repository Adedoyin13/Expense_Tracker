import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { IoIosArrowForward } from "react-icons/io";

const formatDate = (dateString) => {
  return format(new Date(dateString), "dd/MM/yyyy");
};

// const BASE_URL = import.meta.env.VITE_BASE_URL;

const Recent = ({ transaction }) => {
  const [transactions, setTransactions] = useState(transaction);

  return (
    <div className="w-full p-6 bg-white rounded-2xl mt-4 shadow-md font-bodyFont">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
        </div>
        <Link to="/history">
          <button className="flex items-center gap-2 text-sm px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition duration-200">
            See All
          <IoIosArrowForward size={20} />
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto border rounded-xl">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-center py-3 px-2">Title</th>
              <th className="text-center py-3 px-2">Category</th>
              <th className="text-center py-3 px-2 hidden md:table-cell">
                Method
              </th>
              <th className="text-center py-3 px-2">Date</th>
              <th className="text-center py-3 px-2">Amount</th>
              <th className="text-center py-3 px-2 md:hidden">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.slice(0, 3).map((transaction, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="text-center px-2 py-3 text-gray-800">
                    {transaction.title}
                  </td>
                  <td className="text-center px-2 py-3 text-gray-800">
                    {transaction.category}
                  </td>
                  <td className="text-center px-2 py-3 hidden md:table-cell text-gray-600">
                    {transaction.method}
                  </td>
                  <td className="text-center px-2 py-3 text-gray-600">
                    {formatDate(transaction.date)}
                  </td>
                  <td className="text-center px-2 py-3 text-green-500">
                    ${transaction.amount.toLocaleString()}
                  </td>
                  <td className="text-center px-2 py-3 md:hidden text-indigo-900">
                    <CiMenuKebab className="mx-auto text-xl" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6">
                  No recent transactions found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recent;
