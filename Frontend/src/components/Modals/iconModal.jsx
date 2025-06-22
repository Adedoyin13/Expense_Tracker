import React, { useState } from "react";
import { Link } from "react-router-dom";

const iconModal = ({ onClose, onEdit, onDelete }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-64 bg-white dark:bg-indigo-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700 transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 left-3 text-slate-500 dark:text-slate-300 hover:text-red-500 text-2xl font-bold transition"
        >
          &times;
        </button>

        <div className="mt-6 flex flex-col gap-3">
          <Link to="/invoice">
            <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-medium">
              View
            </button>
          </Link>

          <button
            onClick={onEdit}
            className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-medium"
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="w-full px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default iconModal;
