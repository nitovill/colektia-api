const { Router } = require("express");
const router = Router();
const employeeRouter = require("./employeeRoutes");
const imagesRouter = require("./imagesRouter");

router.use("/employee", employeeRouter);
router.use("/image", imagesRouter);

module.exports = router;
