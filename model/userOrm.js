const { findAllUsers } = require('./userQueries');
const connection = require('../config/connection');

// eslint-disable-next-line consistent-return
const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (error) {
    Promise.reject(error);
  }
};
module.exports = {
  fetchUsers,
};
