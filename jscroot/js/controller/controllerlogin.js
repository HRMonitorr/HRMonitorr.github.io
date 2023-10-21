import { get, postWithBearer } from "https://jscroot.github.io/api/croot.js";
import { PostLogin, responseData, ResponseLogin} from "../config/config.js";
import { JSONlink,  tokenlogin, URLLogin } from "../template/template.js";

get(JSONlink, responseData);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("formlogin");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = PostLogin();
        postWithBearer(URLLogin, tokenlogin, data, ResponseLogin)
    });
});

