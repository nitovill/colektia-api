const { Employee } = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const insertEmployee = async ({
  username,
  email,
  first_name,
  last_name,
  document_number,
  image,
  birthdate,
  password,
}) => {
  const newEmployee = {
    id: uuidv4(),
    username,
    email,
    document_number,
    first_name,
    image,
    last_name,
    birthdate,
    password: bcrypt.hashSync(password, 10),
  };
  const newdog = await Employee.create(newEmployee);
  return newdog;
};

const getEmployeeDetail = async (id) => {
  return await Employee.findByPk(id);
};
const getEmployees = async () => {
  return await Employee.findAll({ where: { disabled: false } });
};

const updateEmployee = async (id, data) => {
  if (data.password) {
    data.password = bcrypt.hashSync(data.password, 10);
  }
  return await Employee.update(data, { where: { id } });
};

const deleteEmployee = async (id) => {
  return await Employee.update({ disabled: true }, { where: { id } });
};

module.exports = {
  insertEmployee,
  getEmployeeDetail,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};
