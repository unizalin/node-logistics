var express = require('express');
var router = express.Router();
const cargoController = require("../controllers/cargo.controller")
const handleErrorAsync = require("../server/handleErrorAsync")

router.post('/addCargo', handleErrorAsync(cargoController.create));

router.get('/allCargos', handleErrorAsync(cargoController.findAll));

router.patch("/updateCargo/:id" , handleErrorAsync(cargoController.updateCargo));

router.delete("/delCargo/:id" , handleErrorAsync(cargoController.deleteOne));

router.delete("/delAllCargos" , handleErrorAsync(cargoController.deleteAll));

module.exports = router;
