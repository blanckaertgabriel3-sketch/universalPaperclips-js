//all the logic
class GameModel {
	constructor() {
		//----BUSINESS
		this.paperclipNumber = 0;
		this.availableFunds = 300;
		this.unsoldInventory = 1;
		//price paperclip
		this.pricePerClip = 0.25;
		this.maxPricePerClip = 1;
		this.publicDemand = 75;
		//marketing
		this.marketingLevel = 0;
		this.costMarketingLevel = 100;
		//----MANUFACTURING
		
		//----------
		this.speedSoldPaperclips = 100;
		this.enoughtMoney = false;
		this.theRandomNumber;
	}

	//indrement paperclip number
	addPaperclip() {
		this.paperclipNumber ++;
	}
	//every time we make a paperclip it add 1 to Unsold Inventory
	addUnsoldInventory() {
		this.unsoldInventory ++;
	}
	
	//get the price lower
	lowerPricePerClip() {
		//The lower value possible is 0.01 pricePerClip
		if(this.pricePerClip - 0.01 >= 0) {
			this.pricePerClip -= 0.01;
		}
	}
	//raise the price 
	raisePricePerClip() {
		if(this.pricePerClip + 0.01 < this.maxPricePerClip){
			this.pricePerClip += 0.01;
		}
	}
	
	//adjuste the public demande according to the pricePerClip
	getPublicDemand() {
		this.percentage = (this.pricePerClip / this.maxPricePerClip);
		this.publicDemand = 100 - this.percentage * 100;
	}
	//compare for every type of monney if the player as enought money for a feature
	// (Player money, money needed to pay the feature)
	canPay(moneyReference, moneyNeeded) {
		if(moneyReference > moneyNeeded){
			//player can pay
			this.enoughtMoney = true;
		}else {
			//player can't pay
			this.enoughtMoney = false;
		}
		return this.enoughtMoney;
	}
	//if can pay and click +1 lvl
	addMarketingLevel() {
		//compare the availableFunds with the price of marketing level
		if(this.canPay(this.availableFunds, this.costMarketingLevel)) {
			//incremente the Marketing level if player can pay
			this.marketingLevel ++;
			//deduction of the marketing in the available funds
			this.availableFunds -= this.costMarketingLevel;
			//increatse the costMarketingLevel
			this.costMarketingLevel += 50;
		}
	}
	getRandom(max) {
		return Math.floor(Math.random() * max);
	}

	canSoldInventory() {
		//can redude paperclip in inventory only if: More than 1 paperclip + the random is higher than the publicDemand / 2
		if(this.unsoldInventory > 0) {
			this.theRandomNumber = gameModel.getRandom(101);
			//if the random number < public demand = -1paperclip in inventory and price per clip in available fund
			if(this.theRandomNumber <= this.publicDemand){
				this.unsoldInventory -= 1;
				//add the price per clip in available funds
				this.availableFunds += this.pricePerClip;
			}
		}
	}
}