import React, { useState } from "react";

const mobileMenuModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          {/* Modal Content */}
          <div className="relative w-72 bg-blue-950 text-white rounded-2xl shadow-2xl p-6 transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-white text-xl hover:text-red-400 transition"
            >
              &times;
            </button>

            {/* Menu Items */}
            <ul className="space-y-4 text-lg font-medium">
              <li className="cursor-pointer hover:text-indigo-300 transition">
                Expenses
              </li>
              <li className="cursor-pointer hover:text-indigo-300 transition">
                History
              </li>
              <li className="cursor-pointer hover:text-indigo-300 transition">
                Profile Setting
              </li>
            </ul>

            {/* Dropdown Icon */}
            <div className="mt-6 text-center">
              <span className="text-2xl text-slate-300">⌄</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default mobileMenuModal;
