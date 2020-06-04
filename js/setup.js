'use strict';

var FIRSTNAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECONDNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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

var wizards = [
  {
    name: getRandomMassElement(FIRSTNAME) + ' ' + getRandomMassElement(SECONDNAME),
    coatColor: getRandomMassElement(COATCOLOR),
    eyesColor: getRandomMassElement(EYESCOLOR)
  },
  {
    name: getRandomMassElement(FIRSTNAME) + ' ' + getRandomMassElement(SECONDNAME),
    coatColor: getRandomMassElement(COATCOLOR),
    eyesColor: getRandomMassElement(EYESCOLOR)
  },
  {
    name: getRandomMassElement(FIRSTNAME) + ' ' + getRandomMassElement(SECONDNAME),
    coatColor: getRandomMassElement(COATCOLOR),
    eyesColor: getRandomMassElement(EYESCOLOR)
  },
  {
    name: getRandomMassElement(FIRSTNAME) + ' ' + getRandomMassElement(SECONDNAME),
    coatColor: getRandomMassElement(COATCOLOR),
    eyesColor: getRandomMassElement(EYESCOLOR)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
