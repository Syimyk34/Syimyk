
   
const box = document.querySelector(".box");
const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
	if(position < 350 && topPosition == 0) {
		position += 16;
		block.style.left = `${position}px`;
		setTimeout(() => {
			move();
		}, 200);
	} else if (position >= 350 && topPosition <= 350) {
		topPosition += 16;
		block.style.top = `${topPosition}px`;
		setTimeout(() => {
			move();
		}, 200);
		// bottomPostion -= 16;
		// block.style.left = `$`
	} else if (topPosition >= 350 && position != 0) {
		position -= 16;
		block.style.left = `${position}px`; // - 350
		setTimeout(() => {
			move();
		}, 200)
	} else if (position == 0 && topPosition != 0) {
		topPosition -= 16;
		block.style.top = `${topPosition}px`;
		setTimeout(() => {
			move();
		}, 200)
	}
}

move();

function timer(from = 1) {
	let current = from;

	let timerId = setInterval(function() {
		console.log(current);
		// if (current == to) {
		// 	clearInterval(timerId);
		// }
		current++;
	}, 1000)
}

timer();
