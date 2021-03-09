// menggunkan isi dari dbrestoran 

let tblmenu = [
   {idmenu:25, idkategori:35, menu:"pancake", gambar:"dessert-1.jpg", harga:25000 },
   {idmenu:26, idkategori:35, menu:"ice cream strawberry", gambar:"dessert-4.jpg", harga:13000 },
   {idmenu:27, idkategori:35, menu:"lava cake", gambar:"dessert-3.jpg", harga:16000 },
   {idmenu:28, idkategori:28, menu:"soup", gambar:"dinner-2.jpg", harga:28500 },
   {idmenu:36, idkategori:28, menu:"tomyum", gambar:"dinner-5.jpg", harga:25000 },
   {idmenu:29, idkategori:28, menu:"oatmeal milk", gambar:"breakfast-8.jpg", harga:22000 },
];


let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="produk-content">
        <div class="image">
          <img src="images/${kolom.gambar}" alt="" />
        </div>
        <div class="titel">
          <h2>${kolom.menu}</h2>
        </div>
        <div class="harga">
          <h2>${kolom.harga}</h2>
        </div>
        <div class="btn-beli">
          <button data-idmenu="${kolom.idmenu}">Beli</button>
        </div>
    </div>`;
});

let isi = document.querySelector(".produk")
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if(a.idmenu==btnbeli[index].dataset["idmenu"]){
                cart.push(a);
                console.log(cart);
            }
        });
    };
}

// console.log(cart);