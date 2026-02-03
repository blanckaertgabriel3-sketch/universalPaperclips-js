class Game {
	constructor() {
		this.buttonMakePaperclip = document.getElementById("makepaperclip");
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
		console.log("the start", this.paperclipNumber);
		this.spanPaperclipNumber.innerHTML = this.paperclipNumber;

		//add a listener for add paperclip
		this.buttonMakePaperclip.addEventListener("click", this.addPaperclip);
	}
	//indrement paperclip number
	addPaperclip() {
		console.log("paperclipNumber", this.paperclipNumber);
		this.paperclipNumber ++;
		console.log("paperclipNumber", this.paperclipNumber);
	}
}
new Game;