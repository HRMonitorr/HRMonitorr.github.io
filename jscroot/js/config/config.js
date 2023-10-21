
export function GetDataForm(){
            // Ambil nilai dari input nama dan textarea kritik
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            const role = document.querySelector("#role").value;
            console.log(password)

            // Buat objek data yang akan dikirim ke server
            const data = {
                username: username,
                password: password,
                role: role
            };
            return data
}
//login
export function PostLogin(){

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const data = {
    username: username,
    password: password,
    role: role
};
return data
}
export function AlertPost(value){
    alert(value.message + "\nRegistrasi Berhasil")
    window.location.reload();
}
export function AlertLogin(value){
  alert(value.message + "\nLogin Berhasil")
  window.location.reload();
}
export function ResponsePost(result) {
    AlertPost(result);
}

export function ResponseLogin(result) {
  AlertLogin(result);
}
