'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');

  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  window.colorize(wizardCoat, window.similar.coatColor, wizardCoatInput);
  window.colorize(wizardEyes, window.similar.eyesColor, wizardEyesInput);
  window.colorize(wizardFireball, window.similar.fierballColor, wizardFireballInput);
})();
