
function Tentang() {
    return (
        <main className="tentang-page">
            <section className="tentang-hero">
                <span className="tentang-label">
                    Mengenal KampusHub
                </span>

                <h1>Tentang Kami</h1>

                <p>
                    KampusHub adalah platform papan pengumuman digital
                    Universitas Wahidiyah yang dirancang untuk membantu
                    mahasiswa mendapatkan informasi kampus dengan lebih
                    mudah, praktis, dan terorganisir.
                </p>
            </section>

            <section className="tentang-content">
                <article className="tentang-card">
                    <h2>Siapa Kami?</h2>
                    <p>
                        KampusHub hadir sebagai media informasi kampus
                        yang menyatukan berbagai pengumuman dalam satu
                        tempat. Dengan tampilan yang sederhana dan mudah
                        digunakan, mahasiswa dapat menemukan informasi
                        yang mereka butuhkan dengan lebih cepat.
                    </p>
                </article>

                <article className="tentang-card">
                    <h2>Tujuan Kami</h2>
                    <p>
                        Kami bertujuan mempermudah penyebaran informasi
                        akademik dan kegiatan kampus, sekaligus membantu
                        mahasiswa agar tidak ketinggalan pengumuman
                        penting dari lingkungan Universitas Wahidiyah.
                    </p>
                </article>
            </section>

            <section className="tentang-nilai">
                <h2>Nilai KampusHub</h2>

                <div className="nilai-list">
                    <article className="nilai-item">
                        <h3>Informasi</h3>
                        <p>
                            Informasi kampus disajikan secara jelas
                            dan mudah ditemukan.
                        </p>
                    </article>

                    <article className="nilai-item">
                        <h3>Kemudahan</h3>
                        <p>
                            Akses informasi yang praktis melalui
                            satu platform digital.
                        </p>
                    </article>

                    <article className="nilai-item">
                        <h3>Keterhubungan</h3>
                        <p>
                            Membantu mahasiswa tetap terhubung dengan
                            informasi dan kegiatan kampus.
                        </p>
                    </article>
                </div>
            </section>

            <section className="tentang-footer">
                <p>
                    KampusHub — Informasi Kampus dalam Satu Tempat.
                </p>
            </section>
        </main>
    );
}

export default Tentang;