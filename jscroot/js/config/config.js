// token

//token
export function getTokenFromAPI() {
  const tokenUrl = "https://asia-southeast2-gis-project-401902.cloudfunctions.net/Login";
  fetch(tokenUrl)
    .then(response => response.json())
    .then(tokenData => {
      if (tokenData.token) {
        userToken = tokenData.token;
        console.log('Token dari API:', userToken);
      }
    })
    .catch(error => console.error('Gagal mengambil token:', error));
}
export function GetDataForm(){
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            const role = document.querySelector("#role").value;
            console.log(password)

            const data = {
                username: username,
                password: password,
                role: role
            };
            return data
}
//login
export function PostLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const data = {
    username: username,
    password: password,
    role: role
  };
  return data;
}

export function AlertPost(value){
    alert(value.message + "\nRegistrasi Berhasil")
    window.location.href= "login.html"
}

export function LoginResponseFunction(response) {
  if (response.success) {
    console.log('Login berhasil');
    userToken = response.token;
    console.log('Token Pengguna:', userToken);

  } else {
    console.log("Login Berhasil:", response.message);
    alert(response.message + "\Login Berhasil")
    // window.location.href= "dashboard/home.html"
  }
}
export function ResponseToken(tokenData) {
  if (tokenData.token) {
    console.log('Token dari API:', tokenData.token);
    userToken = tokenData.token;

  } else {
    console.log('Token tidak ditemukan dalam respons');
  }
}


export function ResponsePost(result) {
    AlertPost(result);
}

export function ResponseLogin(result) {
  LoginResponseFunction(result);
  ResponseToken(result);
}
