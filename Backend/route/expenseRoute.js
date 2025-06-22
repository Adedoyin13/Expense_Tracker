const express = require("express");
const router = express.Router();
const { createExpense, getAllExpenses, getExpense, updateExpense, deleteExpenses } = require("../controller/expenseController");
const { protectUser } = require("../middleware/authMiddleware");

router.post("/createExpense", protectUser, createExpense);
router.get("/get-all-expense", protectUser, getAllExpenses);
router.get("/get-expense/:expenseId", protectUser, getExpense);
router.patch("/update-expense/:expenseId", protectUser, updateExpense);
router.delete("/delete-expense/:expenseId", protectUser, deleteExpenses);

module.exports = router;