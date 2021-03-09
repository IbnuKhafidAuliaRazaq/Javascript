if (true){
    console.log('dijalankan jika benar');
}
if (false){
    console.log('dijalankan jika salah');
}else{
    console.log('false');
}

let nilai = 70;
let standar = 60;

let baik = 'lulus';
let gagal = 'tidak lulus';
let batasatas = 100;
let batasbawah = 0;
let peringatan = 'nilai salah';

if (nilai <= batasatas && nilai >= batasbawah){
    if (nilai >= standar){
        console.log(baik);
    }else{
        console.log(gagal);
    }
}else{
    console.log(peringatan);
}