import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/api/produk";

export default function TabelView() {
  const [produks, setProduks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduks = async () => {
      try {
        const response = await axios.get(API_URL);
        setProduks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduks();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Daftar Produk</h2>
      <button
        style={{ marginBottom: "16px" }}
        onClick={() => navigate("/create")}
      >
        Tambah Produk
      </button>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #333",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #333" }}>Kode</th>
            <th style={{ border: "1px solid #333" }}>Nama</th>
            <th style={{ border: "1px solid #333" }}>Kategori</th>
            <th style={{ border: "1px solid #333" }}>Harga</th>
            <th style={{ border: "1px solid #333" }}>Stok</th>
            <th style={{ border: "1px solid #333" }}>Deskripsi</th>
            <th style={{ border: "1px solid #333" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {produks.map((produk) => (
            <tr key={produk.kode}>
              <td style={{ border: "1px solid #333" }}>{produk.kode}</td>
              <td style={{ border: "1px solid #333" }}>{produk.nama}</td>
              <td style={{ border: "1px solid #333" }}>{produk.kategori}</td>
              <td style={{ border: "1px solid #333" }}>{produk.harga}</td>
              <td style={{ border: "1px solid #333" }}>{produk.stok}</td>
              <td style={{ border: "1px solid #333" }}>{produk.deskripsi}</td>
              <td style={{ border: "1px solid #333" }}>
                <button onClick={() => navigate(`/edit/${produk.kode}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}