const isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);
let text = "";
if (isMobile) {
      text = "Hello, people of Gainesville. This is the Viddler speaking.\n\n" +
      "This city likes its stories simple: bright colors, loud nights, familiar rituals that repeat until no one remembers why they started. " +
      "BatVid became part of that routine. A shape in the background. A presence everyone talks about, few actually observe. So I took him " + 
      "out of circulation. Not to erase him, but to see what happens when the outline disappears and only the details remain.\n\n" +
      "I left traces instead of directions. You’ll find them if you slow down—if you’re willing to sit in the dark a little longer than is " + 
      "comfortable, to notice what lingers between moments rather than what announces itself. This isn’t a rescue and it isn’t a chase. " + 
      "It’s an examination of attention. Most people skim. They jump ahead. They miss what matters because it doesn’t demand them " + 
      "loudly enough.\n\n" +
      "If you follow what’s been left behind, you’ll get closer to BatVid. But that isn’t the point. The point is whether, when faced with " + 
      "the full weight of it — every silence, every pause, every unbroken stretch of time — you finally understand what everyone else " + 
      "kept talking over. Some truths don’t hide. They wait. And they only reveal themselves to those who are willing " +
      "to actually watch.";
    } else {
      text = "Hello, people of Gainesville. This is the Viddler speaking.\n\n" +
      "This city likes its stories simple: bright colors, loud nights, familiar rituals that repeat until no one remembers why they started.\n" +
      "BatVid became part of that routine. A shape in the background. A presence everyone talks about, few actually observe. So I took him\n" + 
      "out of circulation. Not to erase him, but to see what happens when the outline disappears and only the details remain.\n\n" +
      "I left traces instead of directions. You’ll find them if you slow down—if you’re willing to sit in the dark a little longer than is\n" + 
      "comfortable, to notice what lingers between moments rather than what announces itself. This isn’t a rescue and it isn’t a chase.\n" + 
      "It’s an examination of attention. Most people skim. They jump ahead. They miss what matters because it doesn’t demand them\n" + 
      "loudly enough.\n\n" +
      "If you follow what’s been left behind, you’ll get closer to BatVid. But that isn’t the point. The point is whether, when faced with\n" + 
      "the full weight of it — every silence, every pause, every unbroken stretch of time — you finally understand what everyone else\n" + 
      "kept talking over. Some truths don’t hide. They wait. And they only reveal themselves to those who are willing\n" +
      "to actually watch.";
    }
const speed = 100;
let i = 0;

function typeWriter() {
  const textElement = document.getElementById('text');
  const cursorElement = document.querySelector('.cursor');

  if (i <= text.length) {
    cursorElement.classList.remove('blink');
    textElement.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    cursorElement.classList.add('blink');
  }
}

typeWriter();
