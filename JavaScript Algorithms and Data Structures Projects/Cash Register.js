function checkCashRegister(price, cash, cid) {
  //check total cash in draw
  const totalCID = () => {
    let acc = 0;
    cid.forEach(each => acc += each[1])
    return Math.round(acc * 100) / 100;
  };

  //check change amount
  let changeDue = cash - price;

  //determine status
  const checkStatus = () => {
    return changeDue > totalCID()? "INSUFFICIENT_FUNDS"
    : changeDue < totalCID()? "OPEN"
    : changeDue === totalCID()? "CLOSED"
    : Null
  };

  //making an array/object to store our change
  let change = []; //for storing numbers according to bill/coin
  let changeReturn = []

  //making arrays that help determine which bill and coins we will use for the the change
  const changeCount = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  let cashInDraw = cid.reverse();

  //making change return system
  for (let i = 0; i < changeCount.length; i++){
    while (changeDue >= changeCount[i]){
      if (cashInDraw[i][1] < changeCount[i]){
        break;
      };
      change.push(changeCount[i])
      changeDue -= changeCount[i];
      cashInDraw[i][1] -= changeCount[i];
      changeDue = Math.round(changeDue * 100) / 100;
      cashInDraw[i][1] = Math.round(cashInDraw[i][1]*100)/100;
    }
    //push change(bill/coins) and its value accordingly
    if (checkStatus() === "CLOSED"){
      let acc = 0
      change.forEach(each => acc += each)
      changeReturn.push([cashInDraw[i][0], Number(acc.toFixed(2))]);
      change = [];
    } else if (change.length !== 0){
      let acc = 0
      change.forEach(each => acc += each)
      changeReturn.push([cashInDraw[i][0], Number(acc.toFixed(2))]);
      change = [];
    } 

  }
  //assemple our check that include status and change
  let check = {}
  if (checkStatus() == "CLOSED"){
    check.status = checkStatus();
    check.change = changeReturn.reverse();
    return check;
  }
  if (checkStatus() == "INSUFFICIENT_FUNDS" || changeDue != 0){
    check.status = "INSUFFICIENT_FUNDS"
    check.change = [];
    return check;
  }
  changeDue = 0;
  check.status = checkStatus();
  check.change = changeReturn;

  return check;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);




// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]