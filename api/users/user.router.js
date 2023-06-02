const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
} = require("./user.controller");
router.get("/",getUsers);
router.post("/register",checkToken, createUser);
router.get("/:id",checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/update",checkToken, updateUser);
router.delete("/",checkToken, deleteUser);

module.exports = router;