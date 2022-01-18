const paragraphField = document.querySelector('.observer-div');
const button = document.querySelector('.btn');
const text = document.querySelector('.input');

button.addEventListener('click', paragraphGeneratorNumberOfTimes);
let counter = 0;
function paragraphGeneratorNumberOfTimes() {
	if (counter < 5) {
		paragraphGenerator();
		counter++;
	} else {
		button.removeEventListener('click', paragraphGeneratorNumberOfTimes);
		alert('nie za dużo?');
	}
}
function paragraphGenerator() {
	console.log('szaszlyk');
	let newParagraph = document.createElement('p');
	newParagraph.textContent = text.value ? text.value : 'ni ma nic';
	paragraphField.appendChild(newParagraph);
	text.value = '';
	paragraphField.classList.toggle('pinkish');
}
let config = {
	attributes: true,
	characterData: true,
	childList: true,
	subtree: true,
	attributeOldValue: true,
	characterDataOldValue: true,
};
const observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.addedNodes.length > 0) {
			console.log(mutation.addedNodes[0]);
			console.log(mutation.target);
		}
	});
});
observer.observe(paragraphField, config);
