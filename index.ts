let nama: string = "Budi";
let umur: number = 17;
let aktif: boolean = true;
console.log(nama, umur, aktif);

function login(username: string, password: string):
boolean {
return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));

interface Buku {
id: number;
judul: string;
penulis?: string;
}
const buku1: Buku = {
id: 1,
judul: "Belajar Backend"
};
console.log(buku1);

// Membuat interface Siswa
interface Siswa {
  id: number;
  nama: string;
  kelas: string;
}

// Membuat object siswa1 sesuai interface
const siswa1: Siswa = {
  id: 1,
  nama: "Alif Arka",
  kelas: "X RPL 1"
};

// Menampilkan ke console
console.log("Data Siswa:");
console.log(siswa1);

// Fungsi hitung umur
function hitungUmur(tahunLahir: number): number {
  const tahunSekarang = new Date().getFullYear();
  return tahunSekarang - tahunLahir;
}

// Contoh penggunaan
const Umur = hitungUmur(2008);

// Menampilkan hasil
console.log("Umur:", umur);