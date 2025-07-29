const shapeshifter = document.createElement('div');
shapeshifter.textContent = " Shapeshifter";
playground.append(shapeshifter);

shapeshifter.classList.add('magical', 'creature');
console.log("Initial classes:", shapeshifter.className);


// adding and removing a class name in browser element
shapeshifter.classList.remove('creature');
shapeshifter.classList.add('humanoid');

// updating and checking the result via console
console.log("Updated classes:", shapeshifter.className);


// output true if a class contains 'invisible' in the class list
// output true
shapeshifter.classList.toggle('invisible');
//shapeshifter.classList.toggle('invisible');

// if a class contains 'invisible' in the class list 
console.log(shapeshifter.classList.contains('invisible'));