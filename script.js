const btnLogin = document.querySelector('#btn-login');

const verifyLogin = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (email.value === 'tryber@test.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
};

btnLogin.addEventListener('click', verifyLogin);
