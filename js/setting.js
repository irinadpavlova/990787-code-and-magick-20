'use strict';

(function () {
  var fireballSize = 22;

  function getFireballSpeed (isWindFromLeft) {
    if (isWindFromLeft) {
      return 5;
    }
    return 2;
  }

  var wizardWidth = 70;

  var wizardHeight = 1.337 * wizardWidth;

  var wizardSpeed = 3;

  function getWizardX (gameFieldWidth) {
    return (gameFieldWidth - wizardWidth) / 2;
  }

  function getWizardY (gameFieldHeight) {
    return gameFieldHeight / 3;
  }
})();
