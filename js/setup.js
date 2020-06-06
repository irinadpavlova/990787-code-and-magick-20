'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_LENGTH = 4;

var getRandomMassElement = function (mass) {
  var random = Math.floor(Math.random() * mass.length);
  var wizardAppearance = mass[random];
  mass.splice(random, 1);
  return wizardAppearance;
};

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [];

var createObject = function () {
  var wizardObject = {
    name: getRandomMassElement(FIRST_NAME) + ' ' + getRandomMassElement(SECOND_NAME),
    coatColor: getRandomMassElement(COAT_COLOR),
    eyesColor: getRandomMassElement(EYES_COLOR)
  };
  return wizardObject;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_LENGTH; i++) {
  wizards[i] = createObject();
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
