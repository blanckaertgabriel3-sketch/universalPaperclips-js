//listeners, keydown keyup from keyboard
class GameController {
	constructor() {
		gameView.updateView();
		this.initInput();
	}
	//add a listener for add paperclip
	initInput() {
		console.log("span", gameView.spanPaperclipNumber);
		console.log("button", gameView.buttonMakePaperclip);
		gameView.buttonMakePaperclip.addEventListener("click", () => {
			gameModel.addPaperclip()
			gameView.updateView();
		});
	}
}


let gameView = new GameView();
let gameModel = new GameModel();
let gameController = new GameController();
