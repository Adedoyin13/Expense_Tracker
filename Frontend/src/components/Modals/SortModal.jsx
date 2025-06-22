import React from "react";

const SortModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative bg-white dark:bg-indigo-900 rounded-2xl shadow-2xl px-8 py-12 w-full max-w-md border border-slate-200 dark:border-slate-700 transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 left-4 text-slate-500 dark:text-slate-400 hover:text-red-500 text-3xl font-bold transition"
        >
          &times;
        </button>

        {/* Grid Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            Title
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            Category
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            Method
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            Date
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            Amount
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
            Income
          </button>
          <button className="col-span-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium">
            Expenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
