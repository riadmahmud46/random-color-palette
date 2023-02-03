const refreshBtn = document.querySelector('.refresh-btn');
const container = document.querySelector('.container');
const maxPaletteBoxes = 20; 

const generatePalette = () => {
	container.innerHTML = ""; // remove container inner html every single time on click refresh button
	for (let i = 0; i < maxPaletteBoxes; i++){
		//Generate a Random Hex Color Code
		let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
		randomHex = `#${randomHex.padStart(6, '0')}`
		//console.log(randomHex);

		//creating a new li element
		const color = document.createElement('li');
		color.classList.add('color');
		color.innerHTML = `
			<div class="rect-box" style="background: ${randomHex}"></div>
			<span class="hex-value">${randomHex}</span>
		`;

		// adding click even to current li element to copy the color 
		color.addEventListener('click', ()=> {
			copyColor(color, randomHex);
		})

		container.appendChild(color);
	} 

}
//calling function to generate the color on page load
generatePalette();

const copyColor = (elem, hexVal) => {
	//console.log(elem, hexVal);
	const colorElement = elem.querySelector(".hex-value");
	navigator.clipboard.writeText(hexVal).then(()=>{
		colorElement.innerText = "Copied";
		setTimeout(()=>colorElement.innerText = hexVal, 1000);
	})
}

refreshBtn.addEventListener('click', generatePalette);