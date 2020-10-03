const { findAllUsers } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  fetchUsers,
};
