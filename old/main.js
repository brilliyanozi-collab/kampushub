console.log(mahasiswa);
const inputMahasiswa = document.getElementById("cariMahasiswa");
const hasilMahasiswa = document.getElementById("hasilMahasiswa");
const btnSearch = document.getElementById("btnSearch");

function cariMahasiswa() {

    const keyword = inputMahasiswa.value.toLowerCase();

    hasilMahasiswa.innerHTML = "";

    if (keyword === "") {
        hasilMahasiswa.innerHTML = `
            <p class="pesan-awal">
                Ketik nama mahasiswa untuk mencari.
            </p>
        `;
        return;
    }

    const hasil = mahasiswa.filter(function(data) {
        return data.nama.toLowerCase().includes(keyword);
    });

    if (hasil.length === 0) {
        hasilMahasiswa.innerHTML = `
            <p class="pesan-awal">
                Mahasiswa tidak ditemukan.
            </p>
        `;
        return;
    }

    hasil.forEach(function(data) {

        const nama = document.createElement("div");

        nama.classList.add("nama-mahasiswa");

        nama.textContent = data.nama;


        // Ketika nama diklik
        nama.addEventListener("click", function() {
            tampilkanDetail(data);
        });


        hasilMahasiswa.appendChild(nama);
    });
}

function tampilkanDetail(data) {

    hasilMahasiswa.innerHTML = `
        <button 
            type="button" 
            class="btn-kembali"
            id="btnKembali">
            ← 
        </button>

        <div class="detail-content">

            <h3>${data.nama}</h3>

            <div class="detail-item">
                <span>NIM</span>
                <strong>${data.nim}</strong>
            </div>

            <div class="detail-item">
                <span>Jurusan</span>
                <strong>${data.jurusan}</strong>
            </div>

            <div class="detail-item">
                <span>Nilai</span>
                <strong>${data.nilai}</strong>
            </div>

        </div>
    `;

    document.getElementById("btnKembali")
        .addEventListener("click", cariMahasiswa);
}

inputMahasiswa.addEventListener("input", cariMahasiswa);

btnSearch.addEventListener("click", cariMahasiswa);