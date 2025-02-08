// content.js
function removeElementsByClassName(className) {
  const elements = document.querySelectorAll(`.${className}`);
  for (const element of elements) {
    element.remove();
  }
}

const classList = [
  "tapsell-native-video",
  "mediaad-notif",
  "yn-notif-item",
  "yn-content",
  "yn-notif-item",
  "yn-borderbox",
  "yn-bnr-container",
  "YN"
];

function RemoveAllItems() {
  classList.forEach((element) => {
    removeElementsByClassName(element);
  });
}

// Remove elements with the class name "yn-content" when the page loads.
RemoveAllItems();

let IntervalId = setInterval(function () {
  RemoveAllItems();
  console.log("yektanet add Remover Interval");
}, 1000);
console.log("yektanet add Remover loaded!");
