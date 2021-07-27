function sendHelloWorld(req, res) {
  console.log(req.session);
  res.json({ message: 'Hello, world' });
}

module.exports = sendHelloWorld;
