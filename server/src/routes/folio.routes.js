const express = require("express");

// const {
//   getAllInvoices,
//   getInvoiceById,
//   createInvoice,
//   editInvoice,
//   deleteInvoice,
//   filterInvoices,
//   markAsPaid,
// } = require("./invoices.controller");

const folioRouter = express.Router();

folioRouter.get("/", getAllInvoices);


module.exports = invoicesRouter;
