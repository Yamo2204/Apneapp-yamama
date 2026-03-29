const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    message.textContent = "Täytä kaikki kentät";
    message.style.color = "red";
    return;
  }

  // نجاح تسجيل الدخول (تجريبي)
  message.textContent = "Kirjautuminen onnistui";
  message.style.color = "green";

  // الانتقال للصفحة الثانية
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800);
});