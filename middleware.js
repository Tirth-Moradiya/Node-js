module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("enter your age in url");
  } else if (req.query.age < 18) {
    resp.send("age must be greater then 18 for access this page");
  } else {
    next();
  }
};
