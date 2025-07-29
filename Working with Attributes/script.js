const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'Wand1');
magicWand.setAttribute('class', 'magical-item wand');
magicWand.textContent = "Magic Wand";
playground.append(magicWand);


// getting the attributes for id and class
console.log(magicWand.getAttribute('id'));
console.log(magicWand.getAttribute('class'));