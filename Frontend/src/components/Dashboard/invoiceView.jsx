import React, { useState } from "react";
import DownloadModal from "../Modals/downloadModal";
import { IoArrowBackOutline } from "react-icons/io5";

const InvoiceView = () => {
  // Categories and transaction methods
  const categories = ["Food and groceries", "Transportation", "Utilities"];
  const transactionMethods = ["Bank Transfer", "Cash", "Credit Card"];

  // Static invoice data
  const invoice = {
    number: "INV-2025-001",
    date: "2025-01-18",
    customer: {
      name: "Cheryl",
      email: "john.doe@example.com",
    },
    titles: [
      {
        name: "Orlando",
        category: "Food and groceries",
        method: "Bank Transfer",
        amount: 500.0,
      },
    ],
    subtotal: 500.0,
    tax: 64.0,
    total: 564.0,
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-bodyFont">
      {/* Sidebar */}
      {/* <SideBar /> */}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <button
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition"
            onClick={() => window.history.back()}
          >
            {/* <ion-icon name="arrow-back-outline" size="large"></ion-icon> */}
            <IoArrowBackOutline />
            <span className="font-medium">Back</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <header className="text-center border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800">Invoice</h1>
          </header>

          <div className="flex flex-col md:flex-row justify-between mb-6 text-gray-700">
            <div className="space-y-2">
              <p>
                <strong>Invoice Number:</strong> 00123
              </p>
              <p>
                <strong>Invoice Date:</strong> 2024/10/02
              </p>
            </div>
            <span className="inline-block mt-4 md:mt-0 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
              Paid
            </span>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
              Customer Information
            </h2>
            <div className="space-y-1 text-gray-700">
              <p>
                <strong>Name:</strong> {invoice.customer.name}
              </p>
              <p>
                <strong>Email:</strong> {invoice.customer.email}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
              Titles
            </h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 font-medium">
                  <tr>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Method</th>
                    <th className="px-4 py-3">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {invoice.titles.map((title, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{title.name}</td>
                      <td className="px-4 py-3">{title.category}</td>
                      <td className="px-4 py-3">{title.method}</td>
                      <td className="px-4 py-3">${title.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
              Summary
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Subtotal:</strong> ${invoice.subtotal.toFixed(2)}
              </p>
              <p>
                <strong>Tax (10%):</strong> ${invoice.tax.toFixed(2)}
              </p>
              <p className="text-lg font-bold text-gray-900">
                <strong>Total:</strong> ${invoice.total.toFixed(2)}
              </p>
            </div>
          </section>

          <div className="flex justify-end">
            <button
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg shadow transition"
              onClick={openModal}
            >
              <ion-icon name="download-outline" size="medium"></ion-icon>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      {modalOpen && <DownloadModal onClose={closeModal} />}
    </div>
  );
};

export default InvoiceView;
