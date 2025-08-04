const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const index = weight / ((height * height) / 10000).toFixed(2);
  if (index < 18.6) {
    results.innerHTML = `Ur Under weight ${index}`;
  } else if (index > 24.9) {
    results.innerHTML = `Ur Over weight ${index}`;
  } else if (index > 18.6 && index < 24.9) {
    results.innerHTML = ` Ur perfect at an weight of ${index}`;
  } else {
    results.innerHTML = 'wrong details entered';
  }
});
