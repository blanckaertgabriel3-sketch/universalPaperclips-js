buttonMakePaperclip = document.getElementById("makepaperclip");
spanPaperclipNumber = document.getElementById("spanPaperclipNumber");

spanUnsoldInventory = document.getElementById("unsoldInventory");
//get elements for Price per clip
buttonLower = document.getElementById("buttonLower");
buttonRaise = document.getElementById("buttonRaise");
spanPricePerClip = document.getElementById("spanPricePerClip");
//get the public demand span
spanPubicDemand = document.getElementById("spanPubicDemand");



//start with 0 paperclips
let paperclipNumber = 0;
spanPaperclipNumber.innerHTML = paperclipNumber;
//unsold Inventory
let unsoldInventory = 0;
spanUnsoldInventory.innerHTML = unsoldInventory;
//start with 0.25 Price per clip
let pricePerClip = 0.25;
spanPricePerClip.innerHTML = pricePerClip;
//public demand
let publicDemand = 75;
spanPubicDemand.innerHTML = publicDemand;

//indrement paperclip number
function addPaperclip() {
	paperclipNumber ++;
	spanPaperclipNumber.innerHTML = paperclipNumber;
}
//every time we make a paperclip it add 1 to Unsold Inventory
function addUnsoldInventory() {
	unsoldInventory ++;
	spanUnsoldInventory.innerHTML = unsoldInventory;
}
//get the price lower
function lowerPricePerClip() {
	//The lower value possible is 0.01 pricePerClip
	if(pricePerClip - 0.01 >= 0) {
		pricePerClip = pricePerClip - 0.01;
		spanPricePerClip.innerHTML = pricePerClip.toFixed(2);
	}
}
//raise the price 
function raisePricePerClip() {
	pricePerClip = pricePerClip + 0.01;
	spanPricePerClip.innerHTML = pricePerClip.toFixed(2);
}
//adjuste the public demande according to the pricePerClip
function getPublicDemand() {
	let maxPricePerClip = 1;
	let percentage = (spanPricePerClip.innerHTML / maxPricePerClip);
	let publicDemand = 100 - percentage * 100;
	spanPubicDemand.innerHTML = publicDemand.toFixed(0);
}
//reduce the unsold Inventory only if we have minimum 1 paperclip
function soldInventory() {
	console.log(publicDemand);
}


//add a listener for add paperclip
buttonMakePaperclip.addEventListener("click", addPaperclip);
//Listener add paperclip in unsold inventory
buttonMakePaperclip.addEventListener("click", addUnsoldInventory);

//listener for the Price per clip
buttonLower.addEventListener("click", lowerPricePerClip);
buttonRaise.addEventListener("click", raisePricePerClip);
//listener for the public demand
buttonLower.addEventListener("click", getPublicDemand);
buttonRaise.addEventListener("click", getPublicDemand);

//call the soldInventory function only if we have more than 0 paperclip
	
if (paperclipNumber > 0) {
	soldInventory();
}