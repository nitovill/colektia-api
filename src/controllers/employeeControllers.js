const {
  insertEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees,
  getEmployeeDetail,
} = require("../services/employeeServices");
const { CREATED } = require("../utils/constants");
const {
  UPDATED_DONE,
  DELETED_DONE,
  UPDATE_FAIL,
  DELETE_FAIL,
} = require("../utils/messages");

const createEmployee = async (req, res, next) => {
  try {
    const newUser = await insertEmployee(req.body);
    res.status(CREATED).json({ data: newUser });
  } catch (err) {
    next(err);
  }
};

const getAllEmployees = async (req, res, next) => {
  try {
    const EmployeeDetail = await getEmployees();
    res.json({ data: EmployeeDetail });
  } catch (err) {
    next(err);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const EmployeeDetail = await getEmployeeDetail(id);
    if (!EmployeeDetail) throw new Error("USER_NOT_FOUD");
    res.json({ data: EmployeeDetail });
  } catch (err) {
    next(err);
  }
};

const updateEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await updateEmployee(id, req.body);
    if (!updatedEmployee[0]) throw new Error(UPDATE_FAIL);
    res.status(CREATED).json({ data: UPDATED_DONE });
  } catch (err) {
    next(err);
  }
};

const deleteEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const eliminatedEmployee = await deleteEmployee(id);
    if (!eliminatedEmployee[0]) throw new Error(DELETE_FAIL);
    res.json({ data: DELETED_DONE });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEmployee,
  updateEmployeeById,
  getEmployeeById,
  getAllEmployees,
  deleteEmployeeById,
};
