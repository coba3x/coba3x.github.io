function showPopup() {
    var popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    }
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
    var popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}

// Menampilkan popup setelah 20 detik
setTimeout(showPopup, 5000);

// Menambahkan event listener untuk tombol tutup
var closeButton = document.getElementById("close-button");
if (closeButton) {
    closeButton.addEventListener("click", hidePopup);
}