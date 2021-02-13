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
    this.add_cell = function (index, image_string) {
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
        img.src = image_string;
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
    
        let table_controller = new table();
        table_controller.add_row();
        table_controller.add_row();
        const Products_class = Parse.Object.extend('Products');
        const Prods = new Parse.Query(Products_class);
        let test;
        Prods.get("iCGIoUKLvm")
        .then((mask) => {
            
            test = mask.get("image");
            console.log("finished api request")
            console.log(test.url());
            let image_url_string = ""+test.url();
            //$("test1").src= image_url_string;        
            table_controller.add_cell(0, image_url_string);
        }, (error) => {

        });
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