const router = require('express').Router();
const connection = require('../../../config/connection');
const { insertUser } = require('../../../model/userQueries');
const { getAllUsers } = require('../../../controllers/userController');
// api prepended to every Route
router.route('/')
  .get(getAllUsers)
  .post(async (req, res) => {
    const userInput = req.body;
    const result = await connection.query(insertUser, userInput);
    res.json(result);
  });

module.exports = router;
