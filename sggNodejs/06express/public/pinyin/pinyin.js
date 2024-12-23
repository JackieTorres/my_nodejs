var { pinyin } = pinyinPro;
var input = document.getElementById("input");
var output = document.getElementById("output");
var btn = document.getElementById("convert");
var cls = document.getElementById("cls");
var copy = document.getElementById("copy");
btn.onclick = function () {
  var result = pinyin(input.value);
  output.value = result;
};
cls.onclick = function () {
  input.value = "";
  output.value = "";
};
copy.onclick = async function () {
  try {
    // 将输出框的内容复制到剪贴板
    await navigator.clipboard.writeText(output.value);
    alert("内容已复制到剪贴板！Ctrl+V即可粘贴。");
  } catch (err) {
    console.error("复制失败:", err);
    alert("复制失败，请重试。");
  }
};
