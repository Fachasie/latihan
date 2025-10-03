const pool = require("../config/db");

// Get All Produk
const getProduks = async (req, res) => {
    try {
        const allProduks = await pool.query("SELECT * FROM produk");
        res.json(allProduks[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error Gagal Mendapatkan Data");
    }
};
// Get Produk By Id
const getProdukById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const [Produk] = await pool.query('SELECT * FROM produk WHERE kode = ?', [id]);
        res.json(Produk);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error Gagal Mendapatkan Data");
    }
};
// Create New Produk
const createProduk = async (req, res) => {
    try {
        const { nama, kategori, harga, stok, deskripsi } = req.body;
        const [result] = await pool.query(
            `INSERT INTO produk (nama, kategori, harga, stok, deskripsi) VALUES (?, ?, ?, ?, ?)`,
            [nama, kategori, harga, stok, deskripsi]
        );
        // Ambil id dari hasil insert (MySQL: result.insertId)
        const insertedId = result.insertId;
        res.json({
            kode: insertedId,
            nama,
            kategori,
            harga,
            stok,
            deskripsi
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Gagal Menambahkan Data");
    }
};
// Update Produk
const updateProduk = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, kategori, harga, stok, deskripsi} = req.body;
        await pool.query(`UPDATE produk SET nama = ?, kategori = ?, harga = ?, stok = ?, deskripsi = ? where kode = ?`, [nama, kategori, harga, stok, deskripsi, id]);
        res.json("Produk was updated!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Gagal Mengupdate Data");
    }
};
// Delete Produk
const deleteProduk = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM produk WHERE kode = ?", [id]);
        res.json("Produk was deleted!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Gagal Menghapus Data");
    }
};

module.exports = {
    getProduks,
    getProdukById,
    createProduk,
    updateProduk,
    deleteProduk
};