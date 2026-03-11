import api from "./axios";

export const getTransactions = () => {
  return api.get("/transactions");
};

export const createTransaction = (data) => {
  return api.post("/transactions", data);
};

export const deleteTransaction = (id) => {
  return api.delete(`/transactions/${id}`);
};

export const getSummary = () => {
  return api.get("/transactions/summary");
};

export const getCategoryBreakdown = () => {
  return api.get("/transactions/breakdown");
};