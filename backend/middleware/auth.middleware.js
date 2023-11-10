const auth = (req, res, next) => {
  console.log("This is Middleware")
  next()
}
module.exports = auth

