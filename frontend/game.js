buttonMakePaperclip = document.getElementById("makepaperclip");
spanPaperclipNumber = document.getElementById("spanPaperclipNumber");

spanUnsoldInventory = document.getElementById("unsoldInventory");
//get elements for Price per clip
buttonLower = document.getElementById("buttonLower");
buttonRaise = document.getElementById("buttonRaise");
spanPricePerClip = document.getElementById("spanPricePerClip");



//start with 0 paperclips
let paperclipNumber = 0;
spanPaperclipNumber.innerHTML = paperclipNumber;
//unsold Inventory
let unsoldInventory = 0;
spanUnsoldInventory.innerHTML = unsoldInventory;
//start with 0.25 Price per clip
let pricePerClip = 0.25;
spanPricePerClip.innerHTML = pricePerClip;



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
	if(pricePerClip - 0.1 > 0) {
		pricePerClip = pricePerClip - 0.01;
		spanPricePerClip.innerHTML = pricePerClip.toFixed(2);
	}
}
//raise the price 
function raisePricePerClip() {
	pricePerClip = pricePerClip + 0.01;
	spanPricePerClip.innerHTML = pricePerClip.toFixed(2);
}



//add a listener for add paperclip
buttonMakePaperclip.addEventListener("click", addPaperclip);
//Listener add paperclip in unsold inventory
buttonMakePaperclip.addEventListener("click", addUnsoldInventory);

//listener for the Price per clip
buttonLower.addEventListener("click", lowerPricePerClip);
buttonRaise.addEventListener("click", raisePricePerClip);
