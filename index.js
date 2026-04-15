var nama = "Budi";
var umur = 17;
var aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
var buku1 = {
    id: 1,
    judul: "Belajar Backend"
};
console.log(buku1);
// Membuat object siswa1 sesuai interface
var siswa1 = {
    id: 1,
    nama: "Alif Arka",
    kelas: "X RPL 1"
};
// Menampilkan ke console
console.log("Data Siswa:");
console.log(siswa1);
// Fungsi hitung umur
function hitungUmur(tahunLahir) {
    var tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunLahir;
}
// Contoh penggunaan
var Umur = hitungUmur(2008);
// Menampilkan hasil
console.log("Umur:", umur);
