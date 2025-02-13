document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn form reload trang

        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;

        // Tên đăng nhập và mật khẩu cố định
        const fixedUsername = "anh_iu_em";
        const fixedPassword = "1512";

        if (user === fixedUsername && pass === fixedPassword) {
            window.location.href = "indexhon.html"; // Chuyển hướng sau khi đăng nhập thành công
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
    });
});

// Hiển thị / Ẩn mật khẩu khi nhấn checkbox
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Vị trí ngẫu nhiên theo chiều ngang
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Thời gian rơi khác nhau

    document.body.appendChild(heart);

    // Xóa trái tim sau khi rơi
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Tạo nhiều trái tim mỗi 300ms
setInterval(createHeart, 200);
