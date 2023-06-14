const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUser,
  deleteUser,
  getData,
  getDataByTripId,
  getVolunByTripId,
  getVolun
} = require("./user.controller");
router.get("/",getUsers);
router.post("/register", createUser);
router.get("/:id",checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/update",checkToken, updateUser);
router.delete("/",checkToken, deleteUser);
router.get("/trip", getData);
router.get("/trip/:id", getDataByTripId);
router.get("/volun", getVolun);
router.get("/volun/:id", getVolunByTripId);

module.exports = router;
