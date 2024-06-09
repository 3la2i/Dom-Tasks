// // question1
// const fruits = [
//   {
//     name: "Apple",
//     url: "https://images.heb.com/is/image/HEBGrocery/000375146-1?$article-235-square$",
//   },
//   {
//     name: "Banana",
//     url: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg?quality=90&resize=960%2C872",
//   },
//   {
//     name: "Cherry",
//     url: "https://foodrevolution.org/wp-content/uploads/iStock-612524020.jpg",
//   },
//   {
//     name: "Orange",
//     url: "https://img.passeportsante.net/1200x675/2021-05-03/i102115-orange-nu.jpg",
//   },
//   {
//     name: "Pineaple",
//     url: "https://www.thespruceeats.com/thmb/z5d2s0hL2KYpMd9IlCwQS9ltOzY=/2144x1424/filters:fill(auto,1)/high-angle-view-of-pineapples-in-crate-587191515-581101da5f9b58564c6a87df.jpg",
//   },
// ];

// const fruitList = document.getElementById("fruit-list");

// for (let i = 0; i < fruits.length; i++) {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = fruits[i].url;
//   img.width = 300;
//   img.height = 300;

//   li.appendChild(img);
//   fruitList.appendChild(li);
// }

// question2

let numbersList = [3, 5, 6, 10, 20];

function isNumberInList(numbers, number) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    if(numbers[i] === number) {
        return i
    } else {
        return -1
    }
    
  }
}

console.log(isNumberInList(numbersList, 12));
