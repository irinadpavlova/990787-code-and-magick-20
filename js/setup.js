'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var WIZARDS_LENGTH = 4;


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
  var wizardObject = {
    name: getRandomMassElement(firstName) + ' ' + getRandomMassElement(secondName),
    coatColor: getRandomMassElement(coatColor),
    eyesColor: getRandomMassElement(eyesColor)
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

var renderWizardsList = function (wizardsLength) {
  for (var i = 0; i < wizardsLength; i++) {
    wizards[i] = createObject(FIRST_NAME, SECOND_NAME, COAT_COLOR, EYES_COLOR);
    fragment.appendChild(renderWizard(wizards[i]));
  }
};

renderWizardsList(WIZARDS_LENGTH);

similarListElement.appendChild(fragment);

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

var getRandomString = function (mass) {
  var string = mass[Math.floor(Math.random() * mass.length)];
  return string;
};

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !setupUserName.matches(':focus')) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var getCoatColor = function (massCoat) {
  var newCoatColor = getRandomString(massCoat);
  wizardCoat.style.fill = newCoatColor;
  wizardCoatInput.value = newCoatColor;
};

var getEyesColor = function (massEyes) {
  var newEyesColor = getRandomString(massEyes);
  wizardEyes.style.fill = newEyesColor;
  wizardEyesInput.value = newEyesColor;
};

var getFireballColor = function (massFireball) {
  var newFireballColor = getRandomString(massFireball);
  wizardFireball.style.background = newFireballColor;
  wizardFireballInput.value = newFireballColor;
};

wizardCoat.addEventListener('click', function () {
  getCoatColor(COAT_COLOR);
});

wizardEyes.addEventListener('click', function () {
  getEyesColor(EYES_COLOR);
});

wizardFireball.addEventListener('click', function () {
  getFireballColor(FIREBALL_COLOR);
});
