// .innerHTML money, Inventory
class GameView {
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
	}
	updateView() {
		this.spanPaperclipNumber.innerHTML = gameModel.paperclipNumber.toFixed(0);
		this.spanUnsoldInventory.innerHTML = gameModel.unsoldInventory.toFixed(0);
		this.spanPricePerClip.innerHTML = gameModel.pricePerClip.toFixed(2);
		this.spanPubicDemand.innerHTML = gameModel.publicDemand.toFixed(0);
		this.costMarketingLevel.innerHTML = gameModel.costMarketingLevel.toFixed(0);
		this.spanMarketingLevel.innerHTML = gameModel.marketingLevel.toFixed(0);
		this.spanAvailableFunds.innerHTML = gameModel.availableFunds.toFixed(2);
	}
}
