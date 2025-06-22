import React, { useEffect, useState } from "react";
import Graph from "../Layouts/Graph";
import { IoAddCircle } from "react-icons/io5";
import Recent from "../Layouts/Recent";
import AddExpenseModal from "../Modals/AddExpenseModal";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import axios from "axios";

const override = {
  display: "block",
  margin: "100px auto",
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

const HomeDash = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchRecentTransaction = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/expense/get-all-expense`,
          { withCredentials: true }
        );
        setTransactions(response.data);
        toast.success(response?.data?.message);
      } catch (error) {
        console.error(error);
        toast.error(
          error?.response?.data?.message || "Failed to fetch transactions"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecentTransaction();
  }, [BASE_URL]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  const totalExpenses = Array.isArray(transactions)
    ? transactions.reduce(
        (acc, transaction) => acc + (transaction.amount || 0),
        0
      )
    : 0;
  const totalFoodGroceries = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.category === "Food and groceries")
        .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;
  const totalUtilities = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.category === "Utilities")
        .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;

  const totalTransportation = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.category === "Transportation")
        .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;
  if (isLoading)
    return (
      <ClipLoader color="ffffff" cssOverride={override} loading={isLoading} />
    );

  return (
    <section className="lg:flex lg:flex-col bg-indigo-600 p-4 lg:gap-6 rounded-xl shadow-inner font-bodyFont">
      <div className="md:flex justify-between items-start w-full gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Current Balance */}
          <div>
            <h1 className="text-white font-semibold text-3xl mb-3">
              Current Balance:
            </h1>
            <div className="p-5 bg-white rounded-xl shadow-sm w-full md:w-2/3">
              <p className="text-gray-500 text-sm">Total Expenses</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-1">
                $
                {totalExpenses.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h2>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div>
            <h1 className="text-white font-semibold text-3xl mb-4">Expenses</h1>
            <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
              {[
                {
                  label: "Foods and Groceries",
                  total: totalFoodGroceries,
                },
                {
                  label: "Utilities",
                  total: totalUtilities,
                },
                {
                  label: "Transportation",
                  total: totalTransportation,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-base font-medium text-gray-700">
                    {item.label}
                  </p>
                  <div className="bg-gray-100 px-4 py-2 rounded-md text-right">
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-sm font-semibold text-gray-700">
                      $
                      {item.total.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full pt-2">
                <button
                  onClick={openModal}
                  className="bg-indigo-700 w-full flex items-center justify-center gap-2 text-white text-sm font-medium py-3 rounded-lg hover:bg-indigo-900 transition"
                >
                  <IoAddCircle className="text-lg" /> Add Expense
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Graph */}
        <div className="flex-1 mt-10 md:mt-0">
          <Graph />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <Recent transaction={transactions} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddExpenseModal
          onAddTransaction={handleAddTransaction}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default HomeDash;
