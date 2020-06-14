'use strict';

(function () {
  var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var WIZARDS_LENGTH = 4;

  window.similar = {
    coatColor: COAT_COLOR,
    eyesColor: EYES_COLOR,
    fierballColor: FIREBALL_COLOR
  };

  var getRandomMassElement = function (mass) {
    var random = Math.floor(Math.random() * mass.length);
    var wizardAppearance = mass[random];
    mass.splice(random, 1);
    return wizardAppearance;
  };

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizards = [];

  var createObject = function (firstName, secondName, coatColor, eyesColor) {
    var wizardObjectTmp = {
      name: getRandomMassElement(firstName) + ' ' + getRandomMassElement(secondName),
      coatColor: getRandomMassElement(coatColor),
      eyesColor: getRandomMassElement(eyesColor)
    };
    return wizardObjectTmp;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var createWizardsObjects = function (massLength) {
    var wizardsObjectsTmp = [];
    for (var i = 0; i < massLength; i++) {
      var wizardObject = createObject(FIRST_NAME, SECOND_NAME, COAT_COLOR, EYES_COLOR);
      wizardsObjectsTmp.push(wizardObject);
    }
    return wizardsObjectsTmp;
  };

  var wizardsObjects = createWizardsObjects(WIZARDS_LENGTH);

  var renderWizardsList = function (wizardsArray) {
    var fragmentTmp = document.createDocumentFragment();
    for (var i = 0; i < wizardsArray.length; i++) {
      fragmentTmp.appendChild(renderWizard(wizardsArray[i]));
    }
    return fragmentTmp;
  };

  var fragmentForWizards = renderWizardsList(wizardsObjects);

  similarListElement.appendChild(fragmentForWizards);
})();
