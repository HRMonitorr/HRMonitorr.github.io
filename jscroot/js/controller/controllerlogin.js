import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
import { PostLogin, ResponseLogin, getTokenFromAPI } from "../config/config.js";
import { URLLogin, token } from "../template/template.js";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formlogin");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil token dari API sebelum melakukan login
    getTokenFromAPI();

    // Menunggu beberapa saat sebelum melakukan login setelah token diambil
    setTimeout(function() {
      let data = PostLogin();
      postWithBearer(URLLogin, token, data, ResponseLogin);
    }, 1000); // Menggunakan timeout untuk memastikan token telah diambil
  });
});
