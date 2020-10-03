const { findAllUsers, insertUserQuery } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const insertUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUserQuery, username);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  fetchUsers,
  insertUserToDb,
};
