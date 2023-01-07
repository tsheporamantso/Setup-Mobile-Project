const hamburger = document.querySelector('.hamburger');
const desktopNav = document.querySelector('.desktop-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  desktopNav.classList.toggle('active');
});

document.querySelectorAll('.navbar-tools').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    desktopNav.classList.remove('active');
  }));

const form = document.getElementById('form');

const email = document.getElementById('email');

function isEmail(email) {
  if (email.toLowerCase() === email) {
    return true;
  }
  return false;
}

function checkInputs(event) {
  // get the value from inputs
  const emailValue = email.value;

  if (isEmail(emailValue)) {
    return true;
  }

  // setErrorFor('Invalid Email, it should only contain lowercase');
  document.querySelector('.small').innerHTML = 'Invalid email. It should only contain lowercace';
  event.preventDefault();
  return false;
}

form.addEventListener('submit', checkInputs);

form.addEventListener('input', () => {
  // Retrieving data input
  const data = {
    name: document.getElementById('username').value,
    email: document.getElementById('email').value,
    text: document.getElementById('text').value,
  };

  // Make all data as string
  const dataStore = JSON.stringify(data);
  // Storing data
  localStorage.setItem('data', dataStore);
});

const getData = JSON.parse(localStorage.getItem('data'));
document.getElementById('username').value = getData.name;
document.getElementById('email').value = getData.email;
document.getElementById('text').value = getData.text;
