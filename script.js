let textToType = ['Hello', 'Hi', 'Salutations']; 
const typingSpeed = 50; 
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
    textToType = textToType.splice(1, textToType.length)
    index = 0;
}
