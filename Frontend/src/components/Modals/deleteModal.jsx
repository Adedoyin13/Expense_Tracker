import React, { useState } from "react";

const DeleteModal = ({ onClose, id }) => {
  const handleDelete = async (expenseId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/expense/${expenseId}`, {
        withCredentials: true,
      });
      console.log(response);
      const filteredExpense = transactions.filter(
        (expense) => expense._id !== expense
      );
      setTransactions(filteredExpense);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const confirmDelete = () => {
    handleDelete(id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 left-3 text-slate-500 dark:text-slate-400 hover:text-red-500 text-2xl font-bold transition"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-center font-semibold text-slate-800 dark:text-white mt-4">
          Are you sure you want to delete this expense?
        </h2>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={confirmDelete}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border dark:border-slate-600 transition text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
