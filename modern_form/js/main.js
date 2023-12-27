const pwdBtn = document.getElementById('pwd_btn')
const pwdInput = document.getElementById('password')
const pwdSecurity = document.getElementById('pwd_security')

pwdBtn.addEventListener('click', (e) => {
    if (e.target.innerText == "visibility_off") {
        e.target.innerText = "visibility"
        pwdInput.type = "text"
    } else {
        e.target.innerText = "visibility_off"
        pwdInput.type = "password"
    }
})

pwdInput.addEventListener('keyup', (e) => {
    if (e.target.value.length < 4) {
        pwdSecurity.style.color = 'red'
    } else if (e.target.value.length < 8) {
        pwdSecurity.style.color = 'yellow'
    } else {
        pwdSecurity.style.color = 'green'
    }
})