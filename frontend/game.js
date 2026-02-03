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
		
		this.initInput();
		//start with 0 paperclips
		this.paperclipNumber = 0;
		this.spanPaperclipNumber.innerHTML = this.paperclipNumber;
		//unsold Inventory
		this.unsoldInventory = 0;
		this.spanUnsoldInventory.innerHTML = this.unsoldInventory;
		//start with 0.25 Price per clip
		this.pricePerClip = 0.25;
		this.spanPricePerClip.innerHTML = this.pricePerClip;
		//public demand
		this.publicDemand = 75;
		this.spanPubicDemand.innerHTML = this.publicDemand;

	}
	initInput(){
		//add a listener for add paperclip
		this.buttonMakePaperclip.addEventListener("click", () => {
			this.addPaperclip()
		});
		this.buttonMakePaperclip.addEventListener("click", () => { 
			this.addUnsoldInventory()
		});
		//listener for the Price per clip
		this.buttonLower.addEventListener("click", () => { 
			this.lowerPricePerClip()
		});
		this.buttonRaise.addEventListener("click", () => { 
			this.raisePricePerClip()
		});
		//listener for the public demand
		this.buttonLower.addEventListener("click", () => { 
			this.getPublicDemand()
		});
		this.buttonRaise.addEventListener("click", () => { 
			this.getPublicDemand()
		});
	}
	//indrement paperclip number
	addPaperclip() {
		this.paperclipNumber ++;
		this.spanPaperclipNumber.innerHTML = this.paperclipNumber;
		
	}
	//every time we make a paperclip it add 1 to Unsold Inventory
	addUnsoldInventory() {
		this.unsoldInventory ++;
		this.spanUnsoldInventory.innerHTML = this.unsoldInventory;
	}
	//get the price lower
	lowerPricePerClip() {
		//The lower value possible is 0.01 pricePerClip
		if(this.pricePerClip - 0.01 >= 0) {
			this.pricePerClip = this.pricePerClip - 0.01;
			this.spanPricePerClip.innerHTML = this.pricePerClip.toFixed(2);
		}
	}
	//raise the price 
	raisePricePerClip() {
		this.pricePerClip = this.pricePerClip + 0.01;
		this.spanPricePerClip.innerHTML = this.pricePerClip.toFixed(2);
	}
	//adjuste the public demande according to the pricePerClip
	getPublicDemand() {
		this.maxPricePerClip = 1;
		this.percentage = (this.spanPricePerClip.innerHTML / this.maxPricePerClip);
		this.publicDemand = 100 - this.percentage * 100;
		this.spanPubicDemand.innerHTML = this.publicDemand.toFixed(0);
	}
	//reduce the unsold Inventory only if we have minimum 1 paperclip
	soldInventory() {
		console.log(this.publicDemand);
	}


}
//instanciation of the class Game
let game1 = new Game;