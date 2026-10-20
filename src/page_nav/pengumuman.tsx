import "../App.css";
import { useEffect, useState } from "react";

type Berita = {
    id: number;
    title: string;
    body: string;
};

type ResponsAPI = {
    posts: Berita[];
};

function Pengumuman() {
    const [berita, setBerita] = useState<Berita[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function ambilBerita() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/posts"
                );

                if (!response.ok) {
                    throw new Error("Gagal mengambil data berita.");
                }

                const data: ResponsAPI = await response.json();

                setBerita(data.posts);
            } catch {
                setError("Berita gagal dimuat. Periksa koneksi internet.");
            } finally {
                setLoading(false);
            }
        }

        ambilBerita();
    }, []);

    if (loading) {
        return <p>Memuat berita...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

   
return (
    <main className="pengumuman-page">
        <h1>Pengumuman Terbaru</h1>
        <p className="pengumuman-subtitle">
            Informasi dan berita terbaru untuk mahasiswa Universitas Wahidiyah.
        </p>

        {loading && (
            <p className="status-berita">Memuat berita...</p>
        )}

        {error && (
            <p className="status-berita">{error}</p>
        )}

        {!loading && !error && (
            <div className="pengumuman-list">
                {berita.map((item) => (
                    <article className="berita-card" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </article>
                ))}
            </div>
        )}
    </main>
);
}

export default Pengumuman;