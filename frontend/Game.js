class Game {
	constructor() {
		//button make paperclip
		this.buttonMakePaperclip = document.getElementById("makepaperclip");
		//the number of paperclips
		this.spanPaperclipNumber = document.getElementById("spanPaperclipNumber");
		//the stock of unsold paperclips
		this.spanUnsoldInventory = document.getElementById("unsoldInventory");
		//get elements for Price per clip
		this.buttonLower = document.getElementById("buttonLower");
		this.buttonRaise = document.getElementById("buttonRaise");
		this.spanPricePerClip = document.getElementById("spanPricePerClip");
		//get the public demand span
		this.spanPubicDemand = document.getElementById("spanPubicDemand");
		//get the marketing button and span
		this.buttonMarketing = document.getElementById("buttonMarketing");
		this.spanMarketingLevel = document.getElementById("spanMarketingLevel");
		this.costMarketingLevel = document.getElementById("costMarketingLevel");
		//get the available funds
		this.spanAvailableFunds = document.getElementById("spanAvailableFunds");

		//put the listeners and set the intervals
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
		//marketing in business area
		this.marketingLevel = 0;
		this.spanMarketingLevel.innerHTML = this.marketingLevel;
		//put the money to 0 for the start; 2 significants figures
		this.availableFunds = 300.00;
		this.spanAvailableFunds.innerHTML = this.availableFunds.toFixed(3);

		this.enoughtMoney = false;
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
		this.buttonMarketing.addEventListener("click", () => { 
			this.addMarketingLevel()
		});
		//repeat a code with an interval; later can discrease delay to sell more faster
		setInterval(this.canSoldInventory, 1000);
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
	//if can pay and click +1 lvl
	addMarketingLevel() {
		//compare the availableFunds with the price of marketing level
		if(this.canPay(this.availableFunds, this.costMarketingLevel)) {
			//incremente the Marketing level if player can pay
			this.marketingLevel ++;
			//wrote the new level
			this.spanMarketingLevel.innerHTML = this.marketingLevel;
			//deduction of the marketing in the available funds
			this.availableFunds = this.availableFunds - this.costMarketingLevel.innerHTML;
			//wrote the new avalableFund
			this.spanAvailableFunds.innerHTML = this.availableFunds.toFixed(3);
			//increatse the costMarketingLevel
			this.increaseCostMarketingLevel = Number(this.costMarketingLevel.innerHTML) + 50.00;
			this.costMarketingLevel.innerHTML = this.increaseCostMarketingLevel;
		}else {
			console.log("Not enought money");
		}
	}
	//compare for every type of monney if the player as enought money for a feature
	// (Player money, money needed to pay the feature)
	canPay(moneyReference, moneyNeeded) {
		if(moneyReference > moneyNeeded.innerHTML){
			//player can pay
			this.enoughtMoney = true;
		}else {
			//player can't pay
			this.enoughtMoney = false;
		}
		return this.enoughtMoney;
	}
	getRandom(max) {
		return Math.floor(Math.random() * max);
	}

	canSoldInventory() {
		let theRandomNumber;
		//can redude paperclip in inventory only if: More than 1 paperclip + the random is higher than the publicDemand / 2
		if(this.unsoldInventory.innerHTML > 0) {
			theRandomNumber = game1.getRandom(101);
			//if the random number < public demand = -1paperclip in inventory and price per clip in available fund 
			if(theRandomNumber <= game1.publicDemand){
				game1.unsoldInventory = game1.unsoldInventory - 1;
				game1.spanUnsoldInventory.innerHTML = game1.unsoldInventory;
				//add the price per clip in available funds
				game1.spanAvailableFunds.innerHTML =  Number(game1.spanAvailableFunds.innerHTML) + Number(game1.spanPricePerClip.innerHTML);
			}else {
				console.log("can't be sold", theRandomNumber, game1.publicDemand)
			}
		}
	}
	
	
	
	
	
}
//instanciation of the class Game
let game1 = new Game();

