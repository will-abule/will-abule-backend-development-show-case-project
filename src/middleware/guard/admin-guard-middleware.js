function adminGuard(req, res, next) {
  return req.user.admin ? next() : res.status(403).send("Access denied");
}

module.exports = adminGuard;
