document.addEventListener("DOMContentLoaded", function () {
  const typewriterElement = document.getElementById("typewriter");
  const words = ["今天很开心!", "今天很难过!", "今天很兴奋!", "今天很幸福!"];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 2500;

  function type() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(
        0,
        currentLetterIndex - 1
      );
      currentLetterIndex--;

      if (currentLetterIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, deletingSpeed);
      }
    } else {
      typewriterElement.textContent = currentWord.substring(
        0,
        currentLetterIndex + 1
      );
      currentLetterIndex++;

      if (currentLetterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pauseBetweenWords);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  setTimeout(type, typingSpeed);
});
