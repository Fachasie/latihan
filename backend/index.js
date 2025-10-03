const express = require('express');
const app = express();
const cors = require('cors');
const produkRoutes = require('./routes/produkeRoutes');

// Middleware
app.use(express.json()); 
app.use(cors({
  origin: '*', // Izinkan permintaan dari semua origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Izinkan semua metode HTTP
}));

// Semua rute di produkRoutes akan memiliki endpoint /api/produk
app.use("/api/produk", produkRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server berjalan pada ${PORT}`);
});