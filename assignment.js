// kilometerToMeter
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Distance can't be negative, input a positive number.";
  } else if (typeof kilometer == "string") {
    return "Please input only Numerical value.";
  } else {
    return kilometer * 1000;
  }
}

// budgetCalculator
function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity) {
  if (watchQuantity < 0 || mobileQuantity < 0 || laptopQuantity < 0) {
    return "Quantity always be positive value.";
  } else if (
    typeof watchQuantity == "string" ||
    typeof mobileQuantity == "string" ||
    typeof laptopQuantity == "string"
  ) {
    return "Please input a number.";
  } else {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var totalBudget =
      watchPrice * watchQuantity +
      mobilePrice * mobileQuantity +
      laptopPrice * laptopQuantity;
    return totalBudget;
  }
}

// hotelCost
function hotelCost(day) {
  var totalCost = 0;
  if (day < 0) {
    return "Day never be Negative.";
  } else if (typeof day == "string") {
    return "Day always be numbers.";
  } else {
    if (day <= 10) {
      totalCost = day * 100;
    } else if (day <= 20) {
      var firstTenDaysTotalCost = 10 * 100;
      var remainingDays = day - 10;
      var secondTenDaysTotalCost = remainingDays * 80;
      totalCost = firstTenDaysTotalCost + secondTenDaysTotalCost;
    } else {
      var firstTenDaysTotalCost = 10 * 100;
      var secondTenDaysTotalCost = 10 * 80;
      var remainingDays = day - 20;
      var restOfTheDays = remainingDays * 50;
      totalCost =
        firstTenDaysTotalCost + secondTenDaysTotalCost + remainingDays;
    }
    return totalCost;
  }
}

// megaFriend
function megaFriend(friends) {
  var biggestName = "";
  if (typeof friends == "number") {
    return "Please type a string";
  } else if (typeof friends != "object") {
    return "Please type an array of names";
  } else {
    for (var i = 0; i < friends.length; i++) {
      if (typeof friends[i] == "string") {
        if (biggestName.length < friends[i].length) {
          biggestName = friends[i];
        }
      }
    }
    return biggestName;
  }
}

// OPTIONAL

// for kilometerToMeter
var meter = kilometerToMeter(2);
console.log(meter);

// for budgetCalculator
var totalBudget = budgetCalculator(2, 4, 5);
console.log(totalBudget);

// for hotelCost
var totalCost = hotelCost(24);
console.log(totalCost);

// megaFriend
var friends = ["Shakib Al Hasan", "Mustafizur Rahman", "Tamim Iqbal"];
var biggestName = megaFriend(friends);
console.log(biggestName);
