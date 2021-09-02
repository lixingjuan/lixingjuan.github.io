// 动画类名
const animateClassArr = [
  "animate__rollIn",
  "animate__fadeInDownBig",
  "animate__shakeX",
  // "animate__shakeY",
  "animate__jello",
];

// add figcaption under image
document.querySelectorAll("img").forEach(function (img) {
  if (img.getAttribute("alt")) {
    let parent = img.parentNode;
    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = img.getAttribute("alt");
    parent.insertBefore(figcaption, img.nextSibling);
  }
});

// add table wrapper
document
  .querySelectorAll(".book-post > table, li > table")
  .forEach(function (table) {
    let parent = table.parentNode;
    let wrapper = document.createElement("div");
    wrapper.className = "table-wrapper";
    parent.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

// 给所有标题添加随机渐入动画效果
document
  .querySelectorAll(".book-content > .book-post h1")
  .forEach(function (item) {
    const classNameStr = item.className;
    item.className = `${classNameStr} animate__animated animate__bounce`;
  });

// 给所有标题添加随机渐入动画效果
document
  .querySelectorAll(".book-content > .book-post h2")
  .forEach(function (item) {
    const classNameStr = item.className;
    const randomNum = Math.floor(Math.random() * animateClassArr.length - 1);
    const newClass = animateClassArr[randomNum];
    item.className = `${classNameStr} animate__animated ${newClass}`;
  });

// add footnotes tooltips
document.querySelectorAll("sup.footnote-ref").forEach(function (fn) {
  let parent = fn.parentNode;
  let wrapper = document.createElement("span");
  let link = fn.childNodes[0].getAttribute("href"); // #fn1
  link = link.substr(1, link.length); // fn1
  let fn_content = document.getElementById(link).innerText.replace(/↩/g, "");
  wrapper.className = "tooltip";
  wrapper.setAttribute("data-tooltip", fn_content);
  parent.insertBefore(wrapper, fn);
  wrapper.appendChild(fn);
});
