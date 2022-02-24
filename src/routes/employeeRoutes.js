const { Router } = require("express");
const router = Router();
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
} = require("../controllers/employeeControllers");

router.post("/", createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployeeById);
router.delete("/:id", deleteEmployeeById);

module.exports = router;
