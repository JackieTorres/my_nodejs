document.addEventListener("DOMContentLoaded", function () {
  const typewriterElement = document.getElementById("typewriter");

  // 固定的前半部分字符
  const fixedText = "今天很";

  // 从数组中随机获取的后半部分字符
  const words = ["开心.😊", "郁闷.😒", "幸福.😘", "元气满满.😁", "小丑.🤡", "爆炸.🤯"];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 2500;

  function getRandomWordIndex() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * words.length);
    } while (randomIndex === currentWordIndex); // 确保不重复上一次的单词
    return randomIndex;
  }

  function type() {
    const currentWord = words[currentWordIndex];
    const fullText = fixedText + currentWord; // 完整的内容包括固定部分和随机部分

    // 如果正在删除字符
    if (isDeleting) {
      typewriterElement.textContent = fullText.substring(
        0,
        currentLetterIndex - 1
      );
      currentLetterIndex--;

      if (currentLetterIndex === fixedText.length) {
        // 删除完后半段字符后，重新获取一个随机单词
        isDeleting = false;
        currentWordIndex = getRandomWordIndex(); // 随机获取下一个单词
        setTimeout(type, 500);
      } else {
        setTimeout(type, deletingSpeed);
      }
    } else {
      // 继续打字
      typewriterElement.textContent = fullText.substring(
        0,
        currentLetterIndex + 1
      );
      currentLetterIndex++;

      // 如果打完了整个完整的文本
      if (currentLetterIndex === fullText.length) {
        isDeleting = true;
        setTimeout(type, pauseBetweenWords); // 在删除前稍作停顿
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  // 开始打字效果
  setTimeout(type, typingSpeed);
});
