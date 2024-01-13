localStorage.clear();
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const firstName = document.getElementById('firstName').value;
    localStorage.setItem(email, password);
    if(email && password && name && firstName ){
    alert("Вы успешно зарегистрировались")
    window.location.href = "two.html";
    }
});

