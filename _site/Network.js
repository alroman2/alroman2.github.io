const fs = require('fs');
const MyFirstClass = Parse.Object.extend("Products");
const myFirstClass = new MyFirstClass();

myFirstClass.set("name", "All American");
myFirstClass.set("price", 5);
myFirstClass.set("Quantity", 100);
let myFile = fs.readFileSync('/data/product/imgs/America5.jpg').toString('base64');
console.log(myFile);
const imageFile = new Parse.File("All_American_test.jpg",{ base64: myFile});
myFirstClass.set("image", imageFile);
myFirstClass.save()
.then((object) => {
  // Success
  alert('New object created with objectId: ' + object.id);
}, (error) => {
  // Save fails
  alert('Failed to create new object, with error code: ' + error.message);
});
