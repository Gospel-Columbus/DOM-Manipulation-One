const template = document.getElementById('wizard-template');
function createWizard(name, specialty) {
    const wizardElement = template.content.cloneNode(true); //cloneNode will clone the template
    wizardElement.querySelector('.wizard-name').textContent = name;
    wizardElement.querySelector('.wizard-specialty').textContent = specialty;
    playground.append(wizardElement);
}


// calling the function.
createWizard('Merlin', 'Time Magic');
createWizard('Gandalf', 'FireWorks');