const fragment = document.createDocumentFragment();
const spellList = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    const magicalItem = document.createElement('li');
    magicalItem.textContent = ` Magical Item ${i + 1}`;
    fragment.append(magicalItem);
}


playground.append(spellList);

spellList.append(fragment);