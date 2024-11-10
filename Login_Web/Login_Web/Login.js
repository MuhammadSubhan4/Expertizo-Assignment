
function login() {
    const allInputs = document.getElementsByTagName('input');
    const email = allInputs[0].value;
    const password = allInputs[1].value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            alert('Logged in successfully');
            window.location.href = '../home/home.html';
            found = true;
            break;
        }
    }

    if (!found) {
        alert('Invalid email or password');
    }
}
































