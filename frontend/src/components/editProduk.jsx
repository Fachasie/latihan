import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/api/produk";

export default function EditProduk() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    harga: "",
    stok: "",
    deskripsi: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setForm(res.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setMessage("Gagal mengambil data produk.");
      }
    };
    fetchProduk();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, form);
      setMessage("Produk berhasil diupdate!");
      setTimeout(() => navigate("/"), 1000); // redirect setelah update
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMessage("Gagal mengupdate produk.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Produk</h2>
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
        <button type="submit">Update Produk</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}