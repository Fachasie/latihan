import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/api/produk";

export default function CreateNewProduk() {
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    harga: "",
    stok: "",
    deskripsi: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, form);
      setMessage("Produk berhasil ditambahkan!");
      setForm({
        nama: "",
        kategori: "",
        harga: "",
        stok: "",
        deskripsi: "",
      });
      console.log("Response:", res.data);
    } catch (err) {
      setMessage("Gagal menambahkan produk.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Tambah Produk Baru</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Kategori:</label>
          <input
            type="text"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Harga:</label>
          <input
            type="number"
            name="harga"
            value={form.harga}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Stok:</label>
          <input
            type="number"
            name="stok"
            value={form.stok}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Deskripsi:</label>
          <input
            type="text"
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Tambah Produk</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}