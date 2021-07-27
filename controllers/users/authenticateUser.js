const bcrypt = require('bcrypt');

function authenticateUser(req, res) {
  bcrypt.hash(req.body.password, 10)
    .then((encryptedPassword) => {
      console.log(req.body.password);
      console.log(encryptedPassword);
    })
    .then(() => {
      const user = { name: 'Василий' };

      if (user) {
        req.session.user = user;
        res
          .status(200)
          .json({ message: 'Пользователь авторизован' });
      } else {
        res.status(401).json({ message: 'Ошибка авторизации' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Ошибка на сервере' });
    });
}

module.exports = authenticateUser;
