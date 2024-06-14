const express = require("express");
const userController= require("../controllers/user")

const router= express.Router();
router.post("/admin/addnew", userController.addNewAdmin);

module.exports = router;
