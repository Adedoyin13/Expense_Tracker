import React, { useState } from "react";
import { Link } from "react-router-dom";

const downloadModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-72 bg-white dark:bg-indigo-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 left-3 text-slate-500 dark:text-slate-400 hover:text-red-500 text-2xl font-bold transition"
        >
          &times;
        </button>

        {/* Export Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            Export as PDF
          </button>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
            Export as Image
          </button>
          <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition font-medium">
            Export as Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default downloadModal;
