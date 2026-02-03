class Game {
	constructor() {
		this.buttonMakePaperclip = document.getElementById("makepaperclip");
		//the visual area
		this.spanPaperclipNumber = document.getElementById("spanPaperclipNumber");
		
		this.spanUnsoldInventory = document.getElementById("unsoldInventory");
		//get elements for Price per clip
		this.buttonLower = document.getElementById("buttonLower");
		this.buttonRaise = document.getElementById("buttonRaise");
		this.spanPricePerClip = document.getElementById("spanPricePerClip");
		//get the public demand span
		this.spanPubicDemand = document.getElementById("spanPubicDemand");
		
		//start with 0 paperclips
		this.paperclipNumber = 0;
		this.initInput();
		this.spanPaperclipNumber.innerHTML = this.paperclipNumber;
	}
	initInput(){
		//add a listener for add paperclip
		this.buttonMakePaperclip.addEventListener("click", () => {
			this.addPaperclip()
		});
		
	}
	//indrement paperclip number
	addPaperclip() {
		this.paperclipNumber ++;
		this.spanPaperclipNumber.innerHTML = this.paperclipNumber;
		
	}
}
//instanciation of the class Game
let game1 = new Game;