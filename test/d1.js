const box = document.querySelector("#box");
const zuo = document.querySelector("#zuo");
const you = document.querySelector("#you");
const shang = document.querySelector("#shang");
const xia = document.querySelector("#xia");

zuo.onclick = function () {
  box.style.left = parseFloat(box.style.left) - 10 + "px";
  console.log("左：" + box.style.left);
};
shang.onclick = function () {
  box.style.top = parseFloat(box.style.top) - 10 + "px";
  console.log("上：" + box.style.top);
};
you.onclick = function () {
  box.style.left = parseFloat(box.style.left) + 10 + "px";
  console.log("右：" + box.style.left);
};
xia.onclick = function () {
  box.style.top = parseFloat(box.style.top) + 10 + "px";
  console.log("下：" + box.style.top);
};
