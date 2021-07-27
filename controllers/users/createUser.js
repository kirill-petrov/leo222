const db = require('../../models');
// console.log(Object.keys(db));

async function createUser(req, res) {
  const { email, password } = req.body;

  try {
    const newUser = await db.User.create({ email, password });

    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json(error);
  }
}

module.exports = createUser;
