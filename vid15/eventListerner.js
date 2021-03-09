
function coba () {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventListener";
    console.log("coba eventListener");
}

// judul.addEventListener("click", coba);

// judul.onclick = coba;

// judul.onmouseover = coba;

judul.onmouseover = function (){
    console.log("coba function anonymous");
}