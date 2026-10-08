import { useState } from "react";
import "./App.css";
import logoUniwa from "./assets/logo-uniwa.png";

type Mahasiswa = {
    nama: string;
    nim: string;
    jurusan: string;
    nilai: number;
};

function App() {
    const mahasiswa: Mahasiswa[] = [
        {
            nama: "Angkasa",
            nim: "123456789",
            jurusan: "Teknik Informatika",
            nilai: 90
        },
        {
            nama: "Bintang",
            nim: "987654321",
            jurusan: "Manajemen Informatika",
            nilai: 85
        },
        {
            nama: "Cahaya",
            nim: "456789123",
            jurusan: "Sistem Informasi",
            nilai: 95
        },
        {
            nama: "Bulan",
            nim: "789123456",
            jurusan: "Teknik Komputer",
            nilai: 88
        },
        {
            nama: "Langit",
            nim: "321654987",
            jurusan: "Teknik Elektro",
            nilai: 92
        },
        {
            nama: "Matahari",
            nim: "654987321",
            jurusan: "Teknik Mesin",
            nilai: 87
        },
        {
            nama: "Bumi",
            nim: "159753486",
            jurusan: "Teknik Sipil",
            nilai: 91
        }
    ];

    const [cariJudul, setCariJudul] = useState("");
    const [cariMahasiswa, setCariMahasiswa] = useState("");
    const [mahasiswaDipilih, setMahasiswaDipilih] =
        useState<Mahasiswa | null>(null);

    // Filter pengumuman
    const pengumuman = [
        {
            judul: "Pengumuman PAM",
            isi: "Kegiatan PAM mahasiswa semester 3 dan semester 5 akan dimulai hari Senin tanggal 7 September 2026."
        },
        {
            judul: "Pengumuman KRS",
            isi: "Batas pengumpulan KRS seluruh mahasiswa teknik terakhir yaitu pada hari Kamis tanggal 3 September 2026."
        },
        {
            judul: "Pengumuman UKM",
            isi: "Penerimaan anggota baru UKM Universitas Wahidiyah akan segera dibuka!."
        }
    ];

    const hasilPengumuman = pengumuman.filter((data) =>
        data.judul.toLowerCase().includes(cariJudul.toLowerCase())
    );

    // Filter mahasiswa
    const hasilMahasiswa = mahasiswa.filter((data) =>
        data.nama.toLowerCase().includes(cariMahasiswa.toLowerCase())
    );

    return (
        <div className="container">

           
            <header>

                <div className="header-logo">
                    <img src={logoUniwa} alt="Logo Universitas Wahidiyah" />
                </div>
        <div className="header-content">
            <div className="top-header">

                <div id="heading">
                    <h1>KampusHub</h1>
                    <h2>Papan Pengumuman Universitas Wahidiyah</h2>
                </div>
                
            </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#beranda">Beranda</a>
                        </li>
                        <li>
                            <a href="#pengumuman">Pengumuman</a>
                        </li>
                        <li>
                            <a href="#tentangkami">tentang</a>
                        </li>
                    </ul>
                </nav>
        </div>
            </header>

            {/* MAIN */}
            <main>

                <h1 id="pengumuman">
                    Pengumuman Terbaru
                </h1>

                {/* SEARCH JUDUL */}
                <div className="search-judul">

                    <label htmlFor="cari">
                        Cari judul:
                    </label>

                    <div className="search-judul-box">

                        <input
                            type="text"
                            name="cari"
                            id="cari"
                            placeholder="Masukkan judul pengumuman..."
                            value={cariJudul}
                            onChange={(e) =>
                                setCariJudul(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            id="btnCariJudul"
                        >
                            Cari
                        </button>

                    </div>
                </div>

                {/* PENGUMUMAN */}
                {hasilPengumuman.map((data) => (
                    <article key={data.judul}>
                        <h2>{data.judul}</h2>
                        <p>{data.isi}</p>
                    </article>
                ))}

                {/* JIKA TIDAK ADA PENGUMUMAN */}
                {hasilPengumuman.length === 0 && (
                    <p className="pesan-awal">
                        Pengumuman tidak ditemukan.
                    </p>
                )}

                {/* MAHASISWA */}
                <h2>
                    Pencarian Mahasiswa
                </h2>

                <div className="search-mahasiswa">

                    <label htmlFor="cariMahasiswa">
                        Nama Mahasiswa:
                    </label>

                    <div className="search-box">

                        <input
                            type="text"
                            id="cariMahasiswa"
                            placeholder="Masukkan nama mahasiswa..."
                            value={cariMahasiswa}
                            onChange={(e) => {
                                setCariMahasiswa(e.target.value);
                                setMahasiswaDipilih(null);
                            }}
                        />

                        <button
                            type="button"
                            id="btnSearch"
                        >
                            Cari
                        </button>

                    </div>
                </div>

                {/* PANEL MAHASISWA */}
                <div className="panel-mahasiswa">

                    {mahasiswaDipilih ? (

                        <>
                            <button
                                type="button"
                                className="btn-kembali"
                                onClick={() =>
                                    setMahasiswaDipilih(null)
                                }
                            >
                                ←
                            </button>

                            <div className="detail-content">

                                <h3>
                                    {mahasiswaDipilih.nama}
                                </h3>

                                <div className="detail-item">
                                    <span>NIM</span>
                                    <strong>
                                        {mahasiswaDipilih.nim}
                                    </strong>
                                </div>

                                <div className="detail-item">
                                    <span>Jurusan</span>
                                    <strong>
                                        {mahasiswaDipilih.jurusan}
                                    </strong>
                                </div>

                                <div className="detail-item">
                                    <span>Nilai</span>
                                    <strong>
                                        {mahasiswaDipilih.nilai}
                                    </strong>
                                </div>

                            </div>
                        </>

                    ) : cariMahasiswa === "" ? (

                        <p className="pesan-awal">
                            Ketik nama mahasiswa untuk mencari.
                        </p>

                    ) : hasilMahasiswa.length === 0 ? (

                        <p className="pesan-awal">
                            Mahasiswa tidak ditemukan.
                        </p>

                    ) : (

                        hasilMahasiswa.map((data) => (
                            <div
                                key={data.nim}
                                className="nama-mahasiswa"
                                onClick={() =>
                                    setMahasiswaDipilih(data)
                                }
                            >
                                {data.nama}
                            </div>
                        ))

                    )}

                </div>

                {/* TENTANG KAMI */}
                <h2 id="tentangkami">
                    Tentang Kami
                </h2>

                <p>
                    Kampus Hub adalah platform pengumuman resmi
                    Universitas Wahidiyah yang menyediakan informasi
                    terbaru bagi mahasiswa dan staf.
                </p>

                {/* FOOTER */}
                <footer>
                    <p>
                        &copy; 2024 Kampus Hub. All rights reserved.
                    </p>
                </footer>

            </main>
        </div>
    );
}

export default App;