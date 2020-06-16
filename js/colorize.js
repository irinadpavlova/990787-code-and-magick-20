'use strict';
(function () {
  var getRandomColor = function (colorArray) {
    return colorArray[Math.floor(colorArray.length * Math.random())];
  };

  window.colorize = function (element, colorArray, elementInput) {
    element.addEventListener('click', function () {
      var color = getRandomColor(colorArray);
      elementInput.value = color;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
