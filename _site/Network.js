// const MyFirstClass = Parse.Object.extend("Products");
// const myFirstClass = new MyFirstClass();

// myFirstClass.set("name", "All American");
// myFirstClass.set("price", 5);
// myFirstClass.set("Quantity", 100);
// let myFile = fs.readFileSync('/data/product/imgs/America5.jpg').toString('base64');
// console.log(myFile);
// const imageFile = new Parse.File("All_American_test.jpg",{ base64: myFile});
// myFirstClass.set("image", imageFile);
// myFirstClass.save()
// .then((object) => {
//   // Success
//   alert('New object created with objectId: ' + object.id);
// }, (error) => {
//   // Save fails
//   alert('Failed to create new object, with error code: ' + error.message);
// });

const Product_class = Parse.Object.extend('Products');
 
const control = $('#photoUpload')[0];
console.log('running');
if (control.files.length > 0){
            console.log('creating mask....')
            const mask = new Product_class();
            mask.set('Quantity',Math.floor(Math.random()*100));
            mask.set('name', "item " + Math.floor(Math.random()*100));
            mask.set('price', Math.floor(Math.random()*15));
            mask.set('Size', 'L');
            const file = control.files[0];
            const name = 'mask.jpg';

            const parseFile = new Parse.File(name,file);
            mask.set('image', parseFile);

            mask.save().then(
                (result) => {
                    console.log('product created:',result);
                }, (error) => {
                    console.error("Error while creating product", error);
                }
            );

            console.log('ran')
        }
    