const text = "Hello! Blah blah blah blah";
const speed = 100;
let i = 0;

function typeWriter() {
  const textElement = document.getElementById('text');
  const cursorElement = document.querySelector('.cursor');

  if (i < text.length) {
    cursorElement.classList.remove('blink');
    
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    cursorElement.classList.add('blink');
  }
}

typeWriter();
