function setTitle(req, res, next) {
  res.locals.title = 'Онлайн-магазин';
  next();
}

module.exports = setTitle;
