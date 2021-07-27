require('dotenv').config();
const express = require('express');
const db = require('./models/index');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');

const setTitle = require('./middleware/setTitle');
const indexRouter = require('./routers/index.route');
const productsRouter = require('./routers/products.route');
const loginRouter = require('./routers/login.route');
const registerRouter = require('./routers/register.route');
const isAuthenticated = require('./middleware/isAuthenticated');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(session({
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // 12 hours
  },
}));
app.use(cookieParser());
app.use(setTitle);
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.get('/profile', isAuthenticated, (req, res) => {
  res.json({ message: 'Мой личный профиль' });
});

app.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy();

  // серверное удаление куки по имени
  res.clearCookie('user_sid');

  res.json({ message: 'Успешный выход' });
});

app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log(`Сервер слушает порт ${PORT}`);

  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  /* eslint-enable no-console */
});
