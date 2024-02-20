const { body, validationResult } = require("express-validator");

exports.validator = [
  body("title")
    .notEmpty()
    .withMessage("title required")
    .isLength({ min: 3 })
    .withMessage("Title must be more than 3 carracters!"),
  body("description")
    .notEmpty()
    .withMessage("Description required")
    .isLength({ min: 3 })
    .withMessage("Description must be more than 3 carracters!"),
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(404).json({ error: error.array() });
    next();
  },
];
