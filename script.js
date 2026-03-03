function ubahWarna() {
    const warna = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    const random = Math.floor(Math.random() * warna.length);
    document.body.style.backgroundColor = warna[random];
}

function tampilkanPesan() {
    alert("Halo! Ini adalah pesan dari JavaScript 🚀");
}
