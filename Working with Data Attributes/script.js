const secretScroll = document.createElement('div');
secretScroll.id = 'secretScroll';
// using data attributes 
secretScroll.dataset.spellType = 'invisibility';
secretScroll.dataset.components = 'moonlight, shadow essence';
secretScroll.textContent = "Ancient Spell Scroll";
playground.append(secretScroll);



console.log("Spell type:", secretScroll.dataset.spellType);
console.log("Components:", secretScroll.dataset.components.split(','));
