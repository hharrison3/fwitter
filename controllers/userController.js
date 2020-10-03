const { fetchUsers } = require('../model/userOrm');

module.exports = {
  getAllUsers: async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
