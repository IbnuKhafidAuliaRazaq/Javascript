document.querySelector("#klik").addEventListener("click", tampil);

function tampil(){

     let url = "js/tblmenu.json";
     fetch(url)

     // .then(response => response.json())
     // .then(json => console.log(json))

     .then(function (res) {
          return res.json();
     })
     .then(function(data) {
          let output = "<h1>Data Menu</h1> <table><th>Menu</th> <th>Harga</th> <th>Warna</th> ";
          data.forEach(element => {
               output += `<tr>
                    <td>${element.menu}</td>
                    <td>${element.harga}</td>
                    <td>${element.warna[0]}</td>

               </tr>`;
          });
          output += "</table>";
          document.querySelector("#isi").innerHTML= output;
     })


    
}











// let tblmenu = [{

//      "idmenu":25, 
//      "idkategori":35, 
//      "menu":"pancake", 
//      "gambar":"dessert-1.jpg",
//      "harga":25000,
//      "warna" : ["merah","kuning","hijau"],
//      "stok" : true,
//      "keterangan" : null
    

// },
// {
//     "idmenu":26, 
//      "idkategori":35, 
//      "menu":"ice cream strawberry", 
//      "gambar":"dessert-4.jpg",
//      "harga":13000,
//      "warna" : ["merah","kuning"],
//      "stok" : false,
//      "keterangan" : null
// }

// ]

// console.log(tblmenu[1]);
