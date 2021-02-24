const $button1 = document.querySelector('#one');
const $button2 = document.querySelector('#two');

$button1.addEventListener('click', (e) => {
  console.log('Button one clicked');
  fetch('/on').then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
});

$button2.addEventListener('click', (e) => {
  console.log('Button two clicked');
  fetch('/off').then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
});
