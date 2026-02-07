//listeners, keydown keyup from keyboard
class GameController {
	constructor() {
		gameView.updateView();
		this.initInput();
	}
	//add a listener for add paperclip
	initInput() {
		gameView.buttonMakePaperclip.addEventListener("click", () => {
			gameModel.addPaperclip();
			gameModel.addUnsoldInventory();
		});
		gameView.buttonLower.addEventListener("click", () => {
			gameModel.lowerPricePerClip();
			gameModel.getPublicDemand();
		});
		gameView.buttonRaise.addEventListener("click", () => {
			gameModel.raisePricePerClip();
			gameModel.getPublicDemand();
		});
		gameView.buttonMarketing.addEventListener("click", () => {
			gameModel.addMarketingLevel();
		});
		//refresh the player view with interval
		setInterval(gameView.updateView.bind(gameView), 100);
		setInterval(gameModel.canSoldInventory.bind(gameModel), gameModel.speedSoldPaperclips);
	}
}


let gameModel = new GameModel();
let gameView = new GameView();
let gameController = new GameController();
