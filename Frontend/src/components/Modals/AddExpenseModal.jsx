import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AddExpenseModal = ({ onAddTransaction, onClose }) => {
  const [addExpense, setAddExpense] = useState({
    title: "",
    amount: "",
    category: "",
    method: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, amount, category, method } = addExpense;
    if (!title || !amount || !category || !method) {
      toast.error("Oops, all fields are required");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/expense/createExpense`,
        addExpense,
        { withCredentials: true }
      );
      if (response?.data) {
        onAddTransaction(response.data);
        toast.success("Expense added successfully");
        setAddExpense({ title: "", amount: "", category: "", method: "" }); // Reset form
        onClose();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 sm:px-0 font-bodyFont">
      <div className="w-full max-w-md bg-white dark:bg-indigo-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Add Expense
        </h2>

        <div className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Dinner at Cafe"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleInputChange}
              value={addExpense.title}
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleInputChange}
              value={addExpense.category}
            >
              <option value="">Select Category</option>
              <option value="Food and groceries">Food and Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label
              htmlFor="method"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Payment Method
            </label>
            <select
              id="method"
              name="method"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleInputChange}
              value={addExpense.method}
            >
              <option value="">Select Method</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Amount
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 dark:text-gray-400">
                $
              </span>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="0.00"
                className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleInputChange}
                value={addExpense.amount}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
