function createUser(req, res) {
  res.status(201).json({ message: 'Пользователь создан' });
}

module.exports = createUser;
