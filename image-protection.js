(function () {
  "use strict";

  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest("img, picture")) {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", function (e) {
    if (e.target.closest("img, picture")) {
      e.preventDefault();
    }
  });

  const style = document.createElement("style");
  style.textContent = `
    img, picture {
      -webkit-user-drag: none;
      -webkit-touch-callout: none;
      user-select: none;
      -webkit-user-select: none;
    }
  `;
  document.head.appendChild(style);
})();
