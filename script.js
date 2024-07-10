function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '12012024'; // Cambia esto a la contraseña que quieras usar

    if (password === correctPassword) {
        document.getElementById('password-section').classList.add('hidden');
        document.getElementById('content-section').classList.remove('hidden');
    } else {
        alert('Contraseña incorrecta. Inténtalo de nuevo.');
    }
}
