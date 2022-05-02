const button = document.querySelector('.botton-generate');
const sentences = [
	{ wod: '30 Pull-ups, 50 Wall-balls, 50 Sit-Ups', type: 'FOR TIME' },
	{ wod: '5 Rounds of: 5 Squat cleans, 25 Push-Ups, 50 Double-unders', type: 'FOR TIME' },
	{ wod: '40 m run, Max rep Pull-ups', type: 'AMRAP 20 min' },
	{ wod: '5 Pull-ups, 10 Push-Ups, 15 Air squats', type: 'EMOM for 30 min' },
];

button.addEventListener('click', function() {
	const textElement = document.querySelector('.wod-card');
	const randomItem = sentences[Math.floor(Math.random()*sentences.length)];

	textElement.innerHTML = `
		<h2>${randomItem.wod}</h2>
		<p>${randomItem.type}</p>
	`;
});