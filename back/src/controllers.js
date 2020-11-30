import sqlite3 from "sqlite3";
import { open } from "sqlite";
import SQL from "sql-template-strings";
const initializeDatabase = async () => {
  // open the database
  const db = await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });
  const getProductsList = async () => {
    const rows = await db.all("SELECT* FROM products");
    return rows;
  };

  const controller = {
    getProductsList,
  };

  return controller;
};
export default initializeDatabase;
