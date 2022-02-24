const { Router } = require("express");
const router = Router();
const employeeRouter = require("./employeeRoutes");

router.use("/employee", employeeRouter);

module.exports = router;
