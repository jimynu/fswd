// Split the bill
//
// Write a function to balance who has overpaid and should be compensated or who has paid less.
//
// The function should take one parameter: an object which represents the members of the group and the amount spent by each.
//
// The function should return an object with the same names, showing how much money the members should pay or receive.
//
// Negative number means they should receive money.


function splitTheBill(group) {
  // add up expenses
  var totalExpenses = 0;
  var members = 0;
  for (var member in group) {
    totalExpenses = totalExpenses + group[member];
    members++;
  }

  // amount to be paid by each
  var toBePaid = totalExpenses / members;

  // split expenses
  for (member in group) {
    group[member] = toBePaid-group[member];
  }

  console.log(group);
}



var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
};

splitTheBill(group); // => { Amy: -5, Bill: 0, Chris: 5 }
