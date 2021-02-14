

function product (name, ID, image_url, price,quantity){
    this.name = name;
    this.ID = ID;
    this.img_url = image_url;
    this.price = price;
    this.quantity = quantity;
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
        row_div.style = 'margin-right: 50px; margin-left: 50px'
        document.getElementById('product_table').appendChild(row_div);
        this.rows++;
    }

    this.add_cell = function (index, product) {
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
        product_link.href = './cart.html';
        button.className = 'btn btn-dark btn-rounded btn-sm mr-1 mb-2';
        button.id = 'addCartButton'+this.contents_num;
        //button.type= 'button';
        //button.onclick = "location.href='./cart.html'";


        img.className = 'pic-1';
        img.src = product.img_url;
        product_link.innerText = product.name;
        price_span.innerHTML = '$'+ product.price + '</br>'
        button.innerText = 'Add to cart';

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
        this.table_contents[this.contents_num] = product;
        this.contents_num++;
    }
}

// function add_to_cart(id_button){
//     console.log('Clicked');
//     let modal = document.getElementById('exampleModal')
//     id_button.onclick = function(){
//         modal.style.display = 'block';
//     }
// }

function post_content(){
    
    for (let i = 0; i < 20; i++){
        const Product_class = Parse.Object.extend('Products');
        const mask = new Product_class();

        mask.set('Quantity',Math.floor(Math.random()*21));
        mask.set('name', "item"+i );
        mask.set('price', 1);
        mask.set('Size', 'L');
        
        
    }
}

function upload(){
    const Product_class = Parse.Object.extend('Products');
    
    const control = $('#photoUpload')[0];
    console.log('running');
    for (let i = 0; i < 25; i++){
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
    }
}
function generate_content(){
        let product_ids;
        
        //initialize product table view
        let table_controller = new table();
        table_controller.add_row();
        //table_controller.add_row();

        //start quering database for available proucts
        const Products_class = Parse.Object.extend('Products');
        const query = new Parse.Query(Products_class);
        query.greaterThan("Quantity",0);

        query.find().then( (results) => {
            console.log(results);
            let i = 0;
            product_ids = new Array(results.length);
            //store data results in global content and display them
            results.forEach(object => {
                const name = object.attributes.name;
                const  ID = object.id;
                const imageURL = object.attributes.image.url();
                const price = object.attributes.price;
                const quantity = object.attributes.Quantity;
                const curr_product = new product(name,ID,imageURL,price,quantity)
                table_controller.add_cell(0, curr_product);
                product_ids[i++] = curr_product
                //console.log(object.attributes.name);
            });
            console.log(product_ids);        
            
        }, (error) => {
            console.log(error);
        });

        // let test;
        // Prods.get("iCGIoUKLvm")
        // .then((mask) => {
            
        //     test = mask.get("image");
        //     console.log("finished api request")
        //     console.log(test.url());
        //     let image_url_string = ""+test.url();
        //     //$("test1").src= image_url_string;        
        //     table_controller.add_cell(0, image_url_string);
        // }, (error) => {

        // });
        // query.find().then((results) => {
        //  // You can use the "get" method to get the value of an attribute
        // // Ex: response.get("<ATTRIBUTE_NAME>")
        // if (typeof document !== 'undefined') document.write(`ParseObjects found: ${JSON.stringify(results)}`);
        // console.log('ParseObjects found:', results);
        // }, (error) => {
        // if (typeof document !== 'undefined') document.write(`Error while fetching ParseObjects: ${JSON.stringify(error)}`);
        // console.error('Error while fetching ParseObjects', error);
        // });


     
}