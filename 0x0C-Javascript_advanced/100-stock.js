const stock = {macbook: 2, iphone: 4};

function processPayement(itemName){
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName){
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being ptocessed');
}

function processOrder(itemName, callbackPayment, callbackError){
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] <= 0){
    callbackError(itemName);
  }
  else{
    callbackPayment(itemName);
  }
}


let userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
input = userInput.toLowerCase();


switch(input){
  case "macbook":
    processOrder(input, processPayement, processError);
    break;

  case "iphone":
    processOrder(input, processPayement, processError);
    break;

  default:
    alert('Enter a valid item name');
}
