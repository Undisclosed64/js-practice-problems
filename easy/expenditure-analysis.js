/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let answerArr = [];

  for (let i = 0; i < transactions.length; i++) {
    if (answerArr.length) {
      //check for duplicates
      checkforDuplicates(answerArr, transactions[i]);
    } else {
      //create the obj
      addObj(transactions[i], answerArr);
    }
  }
  // console.log(answerArr);
  return answerArr;
}

//add object
function addObj(obj, arr) {
  let transaction = {
    category: obj.category,
    totalSpent: obj.price,
  };
  arr.push(transaction);
}

//check for duplicates
function checkforDuplicates(createdArr, currentElement) {
  let isDuplicate = false;
  for (let i = 0; i < createdArr.length; i++) {
    if (createdArr[i].category === currentElement.category) {
      // console.log("already exists");
      addToTotalSpent(createdArr[i], currentElement.price);
      isDuplicate = true;
    }
  }
  if (!isDuplicate) {
    // console.log("does not exist");
    addObj(currentElement, createdArr);
  }
}

//add new price to total spent of existing obj
function addToTotalSpent(existingObj, price) {
  existingObj.totalSpent += price;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
