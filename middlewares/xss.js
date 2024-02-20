const xss = require("xss");

exports.middlewarXss = (req, res, next) => {
  const fields = ["title", "description"];
  for (field in fields) {
    if (req.body[fields[field]])
      req.body[fields[field]] = xss(req.body[fields[field]]);
  }
  next();
};
