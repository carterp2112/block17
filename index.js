// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }

  count() {
    let total = 0;
    for (let i in this.data) {
      total++;
    }
    return total;
  }

  printNumbers() {
    for (let i in this.data) {
      console.log(i)
    }
  }

  odds() {
    let odds = [];
    for (let i in this.data) {
      if(i % 2 === 0) {
        continue;
      } else {
        odds.push(i);
      }
    }
    return odds;
  }

  evens() {
    let evens = [];
    for (let i in this.data) {
      if(i % 2 === 0) {
        evens.push(i);
      }
    }
    return evens; 
  }

  sum() {
    let sum = 0;
    for (let i in this.data) {
      sum += i;
    }
    return sum;
  }

  product() {
    let product = 1;
    for (let i in this.data) {
      product *= i;
    }
    return product;
  }

  greaterThan(target) {
    let bigger = [];
    for (let i in this.data) {
      if (i >= target) {
        bigger.push(i);
      }
    }
    return bigger;
  }

  howMany(target) {
    let total = 0;
    for (let i in this.data) {
      if(i === target) {
        total++;
      }
    }
    return total;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //re turns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
