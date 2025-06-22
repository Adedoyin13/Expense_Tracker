import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import DownloadModal from "../Modals/downloadModal";
import SortModal from "../Modals/SortModal";
import IconModal from "../Modals/iconModal";
import DeleteModal from "../Modals/deleteModal";
import EditModal from "../Modals/editModal";
import axios from "axios";
import { format } from "date-fns";
import { IoSearch } from "react-icons/io5";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const formatDate = (dateString) => {
  return format(new Date(dateString), "dd/MM/yyyy");
};

// const transactions = [
//   {
//     title: "Orlando",
//     category: "Food and Groceries",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$4,850.00",
//   },
//   {
//     title: "Orlando",
//     category: "Food and Groceries",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$4,850.00",
//   },
//   {
//     title: "Orlando",
//     category: "Food and Groceries",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$4,850.00",
//   },
//   {
//     title: "PayPal",
//     category: "TRavel and Expenses",
//     method: "Credit Card",
//     date: new Date().toLocaleDateString(),
//     amount: "$3,600.00",
//   },
//   {
//     title: "Netflix",
//     category: "Utility",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$400.00",
//   },
//   {
//     title: "Netflix",
//     category: "Utility",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$400.00",
//   },
//   {
//     title: "Netflix",
//     category: "Utility",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$400.00",
//   },
//   {
//     title: "Netflix",
//     category: "Utility",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$400.00",
//   },
//   {
//     title: "Netflix",
//     category: "Utility",
//     method: "Bank Transfer",
//     date: new Date().toLocaleDateString(),
//     amount: "$400.00",
//   },
// ];

const History = () => {
  const [transaction, setTransaction] = useState([]);
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const openSortModal = () => {
    setSortModalOpen(true);
  };

  const closeSortModal = () => {
    setSortModalOpen(false);
  };

  const openDownloadModal = () => {
    setDownloadModalOpen(true);
  };

  const closeDownloadModal = () => {
    setDownloadModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/expense/get-all-expense`,
          { withCredentials: true }
        );
        console.log(response);
        setTransaction(response.data);
      } catch (error) {
        console.log("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <section className="w-full px-4 py-6 md:px-8 font-bodyFont bg-white min-h-screen">
      <div className="w-full mt-6 bg-white rounded-2xl shadow-md p-6 space-y-6">
        {/* Search Input */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-4xl">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-indigo-100 text-black placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              placeholder="Search by keyword..."
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
            <IoSearch size={20} />
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <button
            onClick={openSortModal}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg text-sm font-medium w-full md:w-auto"
          >
            <FaCaretDown />
            Sort by Category
          </button>
          <button
            onClick={openDownloadModal}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg text-sm font-medium w-full md:w-auto"
          >
            <FaCaretDown />
            Download
          </button>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base border rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Title",
                  "Category",
                  "Transaction Method",
                  "Date",
                  "Amount",
                  "Action",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className="text-center text-base font-medium text-gray-700 px-4 py-3"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.isArray(transaction) && transaction.length > 0 ? (
                transaction.map((trans, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="text-center px-4 py-3 text-gray-800">
                      {trans?.title}
                    </td>
                    <td className="text-center px-4 py-3 text-gray-800">
                      {trans?.category}
                    </td>
                    <td className="text-center px-4 py-3 text-gray-600 hidden md:table-cell">
                      {trans?.method}
                    </td>
                    <td className="text-center px-4 py-3 text-gray-600">
                      {formatDate(trans?.date)}
                    </td>
                    <td className="text-center px-4 py-3 text-green-600 font-semibold">
                      ${trans?.amount.toLocaleString()}
                    </td>
                    <td
                      className="text-center px-4 py-3 cursor-pointer text-indigo-900 hover:text-indigo-700"
                      onClick={openModal}
                    >
                      <CiMenuKebab className="mx-auto text-xl" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    No recent transactions found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {downloadModalOpen && <DownloadModal onClose={closeDownloadModal} />}
      {sortModalOpen && <SortModal onClose={closeSortModal} />}
      {modalOpen && (
        <IconModal
          onClose={closeModal}
          onDelete={() => {
            closeModal();
            setDeleteModalOpen(true);
          }}
          onEdit={() => {
            closeModal();
            setEditModalOpen(true);
          }}
        />
      )}
      {deleteModalOpen && <DeleteModal onClose={closeDeleteModal} id={id} />}
      {editModalOpen && <EditModal onClose={closeEditModal} />}
    </section>
  );
};

export default History;
