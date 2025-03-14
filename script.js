// Data mahasiswa
const anbatukang = {
    nama: "Ān Bā Tú Kāng",
    gelar: "pahlawan",
};

// Menampilkan data mahasiswa
document.getElementById("nama").textContent = anbatukang.nama;
document.getElementById("gelar").textContent = anbatukang.gelar;

function showAlert() {
    alert("Selamat jalan " + anbatukang.nama + ". Jasamu sebagai " + anbatukang.gelar + " akan dikenang selama-lamanya! ");
}