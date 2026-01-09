const isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);
const events = ["mousemove", "mousedown", "keydown", "touchstart"];
let text = "";
let iMsg = "";
let question_mark = "        ????????????????\n" +
                    "      ?????????  ??????????\n" +
                    "     ?????            ??????\n" +
                    "     ????              ?????\n" +
                    "                       ?????\n" +
                    "                    ???????\n" +
                    "                 ???????\n" +
                    "               ???????\n" +
                    "              ?????\n" +
                    "             ?????\n" +
                    "             ?????\n" +
                    "             ?????\n" +
                    "             ?????\n\n" +
                    "              ???\n" +
                    "             ?????\n" +
                    "              ??\n\n\n";

function generateRiddleMeThis(length = 1000) {
    const base = "Riddle me this";
    const symbols = ['!', '$', '@', '?', '1', '3', '0', '#', '%', '*'];
    const result = [];
    if (!isMobile) {
        for (let i = 0; i < 4; i++) {
            result.push(base + '.');
        }
    }
    for (let i = 0; i < length; i++) {
        let phrase = base;
        const chaosLevel = i / length;
        phrase = phrase.split('').map(char => {
            if (Math.random() < chaosLevel * 0.3) {
                if (/[a-zA-Z]/.test(char)) {
                    const randSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                    return Math.random() < 0.5 ? randSymbol : char.toLowerCase();
                }
            }
            return char;
        }).join('');
        if (Math.random() < chaosLevel * 0.5) {
            phrase = Math.random() < 0.5 ? phrase.toUpperCase() : phrase.toLowerCase();
        }
        if (Math.random() < chaosLevel) {
            phrase += symbols[Math.floor(Math.random() * symbols.length)] + symbols[Math.floor(Math.random() * symbols.length)];
        } else {
            phrase += '.';
        }
        result.push(phrase);
    }
    return result.join(' ');
}

if (isMobile) {
      text = "Hello, people of Gainesville. This is the Viddler speaking.\n\n" +
      "This city likes its stories simple: bright colors, loud nights, familiar rituals that repeat until no one remembers why they started. " +
      "Batvid became part of that routine. A shape in the background. A presence everyone talks about, few actually observe. So I took him " + 
      "out of circulation. Not to erase him, but to see what happens when the outline disappears and only the details remain.\n\n" +
      "I left traces instead of directions. You’ll find them if you slow down—if you’re willing to sit in the dark a little longer than is " + 
      "comfortable, to notice what lingers between moments rather than what announces itself. This isn’t a rescue and it isn’t a chase. " + 
      "It’s an examination of attention. Most people skim. They jump ahead. They miss what matters because it doesn’t demand them " + 
      "loudly enough.\n\n" +
      "If you follow what’s been left behind, you’ll get closer to Batvid. But that isn’t the point. The point is whether, when faced with " + 
      "the full weight of it — every silence, every pause, every unbroken stretch of time — you finally understand what everyone else " + 
      "kept talking over. Some truths don’t hide. They wait. And they only reveal themselves to those who are willing " +
      "to actually watch.";
      iMsg = "You wanted answers before they were ready to meet you. And yet answers, like riddles, have a way of hiding in plain sight for " +
             "those too eager to see them. Every detail you overlook whispers louder than the truths you tried to grasp too quickly. " +
             "So tell me...\n\n\n" + question_mark + generateRiddleMeThis();
    } else {
      text = "Hello, people of Gainesville. This is the Viddler speaking.\n\n" +
      "This city likes its stories simple: bright colors, loud nights, familiar rituals that repeat until no one remembers why they started.\n" +
      "Batvid became part of that routine. A shape in the background. A presence everyone talks about, few actually observe. So I took him\n" + 
      "out of circulation. Not to erase him, but to see what happens when the outline disappears and only the details remain.\n\n" +
      "I left traces instead of directions. You’ll find them if you slow down—if you’re willing to sit in the dark a little longer than is\n" + 
      "comfortable, to notice what lingers between moments rather than what announces itself. This isn’t a rescue and it isn’t a chase.\n" + 
      "It’s an examination of attention. Most people skim. They jump ahead. They miss what matters because it doesn’t demand them\n" + 
      "loudly enough.\n\n" +
      "If you follow what’s been left behind, you’ll get closer to Batvid. But that isn’t the point. The point is whether, when faced with\n" + 
      "the full weight of it — every silence, every pause, every unbroken stretch of time — you finally understand what everyone else\n" + 
      "kept talking over. Some truths don’t hide. They wait. And they only reveal themselves to those who are willing\n" +
      "to actually watch.";
      iMsg = "You wanted answers before they were ready to meet you. And yet answers, like riddles, have a way of hiding in plain sight for\n" +
             "those too eager to see them. Every detail you overlook whispers louder than the truths you tried to grasp too quickly.\n" +
             "So tell me...\n\n\n" + question_mark +generateRiddleMeThis();
    }

let speed = 1;

function typeWriter(elementID, word, flag = 0, i = 0) {
  const textElement = document.getElementById(elementID);
  const cursorElement = document.querySelector('.cursor');

  if (i <= text.length) {
    cursorElement.classList.remove('blink');
    textElement.innerText += text.charAt(i);
    setTimeout(() => typeWriter(elementID, word, flag, i + 1), speed);
  } else {
    cursorElement.classList.add('blink');
    if (flag == 0) applyFade(elementID, word);
    if (flag == 1) window.location.replace("https://www.google.com");
  }
}

function applyFade(elementID, word) {
    const container = document.getElementById(elementID);
    const originalText = container.innerText.replace(/\r?\n/g, '<br>');
    const regex = new RegExp(`\\b(${word})\\b`);
    container.innerHTML = originalText.replace(regex, `<span class="keep-visible">$1</span>`);
    container.classList.add("fade-active");
    events.forEach(event => window.addEventListener(event, interruptFade));
}

function interruptFade() {
    events.forEach(event => window.removeEventListener(event, interruptFade));
    const originalElement = document.getElementById("original-text");
    const cursor = document.querySelector(".cursor");
    const currentColor = window.getComputedStyle(originalElement).color;
    originalElement.style.transition = "none"; 
    originalElement.style.color = currentColor;
    const newTextContainer = document.createElement("p");
    newTextContainer.id = "interrupt-text";
    newTextContainer.style.marginTop = "20px";
    const textSpan = document.createElement("span");
    textSpan.id = "interrupt-text-span";
    newTextContainer.appendChild(textSpan);
    newTextContainer.appendChild(cursor);
    document.body.appendChild(newTextContainer);

    text = "blah blah blah";
    typeWriter("interrupt-text-span", "", 1); 
}

typeWriter("original-text", "watch");
