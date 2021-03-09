// array - string , numnber , objek , campuran

let nilai = [
    {nama : "budi", ipa : 99 , bahasa : 70, matematika : 70},
    {nama : "joni", ipa : 80 , bahasa : 90, matematika : 60},
    {nama : "tejo", ipa : 75 , bahasa : 70, matematika : 90},
    {nama : "siti", ipa : 90 , bahasa : 80, matematika : 90},
];

let nama= ["budi", "joni", "tejo","siti"];

// menambah nilai di akhir
nama.push("ani","roma");

// mengambil nilai dibagian akhir
// console.log(nama.pop());

// mengambil nilai diawal
// console.log(nama.shift());

// menambah nilai dibagian awal
nama.unshift("sari","tono");

// menghapus dan mengambil
// console.log(nama.splice(3,4));

// mengcopy dan mengambil
// console.log(nama.slice(3,6));

// console.log(nilai);

// console.log(nama);


// ARRAY METHODS KE 2 

let mapel = ["ipa","bahasa","matematika"];
// menggabungkan  array jadi 
// console.log(nama.concat(mapel));
// console.log(nama.concat("ips","pkn","sejarah"));

// for (let index = 0; index < nama.length; index++) {
//    console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// });

// nama.forEach((a) => console.log(a));

// nilai.filter(function(a) {
//     if (a.ipa > 80 ){
//         console.log(a);
//     }
// });

// console.log(nilai);

// nilai.filter((a) => (a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null));

// BAGIAN 3

// MENGAMBIL Array untuk menghasilkan ARray
// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map(a => [a.nama, a.ipa ,a.matematika]);

// console.log(siswa);

// MEGURUTKAN ABJAD
// mapel.sort();
// console.log(mapel);


// let hasil = nilai.reduce(function (a,b) {
//     return (a = a + b.ipa);
// },0);

// arow function

let hasil = nilai.reduce((a,b) => (a += b.bahasa),0);



console.log(hasil);