const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkcontroller');
// Get All Produk
router.get('/', produkController.getProduks);

// Get Produk By Id
router.get('/:id', produkController.getProdukById);

// Create New Produk
router.post('/', produkController.createProduk);

// Update Produk
router.put('/:id', produkController.updateProduk);

// Delete Produk
router.delete('/:id', produkController.deleteProduk);

module.exports = router;