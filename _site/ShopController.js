function product (name, ID, image_url, price){
    this.name = name;
    this.ID = ID;
    this.img_url = image_url;
    this.price = price;
}

function tableCell(){
    this.contents = [];
    this.data;
}

function table(){
    this.table_contents = [];
    this.row_contents = [];
    this.contents_num = 0;
    this.rows = 0;
    this.add_row = function(){
        const row_div = document.createElement('div');
        row_div.id = 'row' +this.rows; 
        row_div.className = 'row align-items-center'
        document.getElementById('product_table').appendChild(row_div);
        this.rows++;
    }
    this.add_cell = function (index) {
        const product_div = document.createElement('div');
        const product_grid_div = document.createElement('div');
        const product_image_div = document.createElement('div');
        const image_container = document.createElement('a');
        const img = document.createElement('img');
        const price_span = document.createElement('span');

        const product_content_div = document.createElement('div');
        const content_name_header = document.createElement('h3');
        const product_link = document.createElement('a');
        const button_span = document.createElement('span');
        const button = document.createElement('button');

        product_div.className = 'col-md-3 col-sm-6';
        product_grid_div.className = 'product-grid';
        product_image_div.className = 'product-image';
        product_content_div.className = 'product-content';
        content_name_header.className = 'title';
        price_span.className = 'price';
        product_link.href = '#';
        button.className = 'btn btn-dark btn-rounded btn-sm mr-1 mb-2';

        img.className = 'pic-1';
        img.src = '/data/product/imgs/pic1.jpg';
        product_link.innerText = 'All american';
        price_span.innerHTML = '$5 </br>'
        button.innerText = 'Buy now';

        product_div.appendChild(product_grid_div);
        product_grid_div.appendChild(product_image_div);
        product_image_div.appendChild(image_container);
        product_image_div.appendChild(product_content_div);
        image_container.appendChild(img);
        product_content_div.appendChild(content_name_header);
        product_content_div.appendChild(price_span);
        product_content_div.appendChild(button_span);
        button_span.appendChild(button);
        
        content_name_header.appendChild(product_link);

        document.getElementById('row'+ index).appendChild(product_div);

    }
}

function generate_content(){
        const fs = require('fs');
const MyFirstClass = Parse.Object.extend("Products");
const myFirstClass = new MyFirstClass();

myFirstClass.set("name", "All American");
myFirstClass.set("price", 5);
myFirstClass.set("Quantity", 99);
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
;

        let table_controller = new table();
        table_controller.add_row();
        table_controller.add_row()


        table_controller.add_cell(0);
     
}