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
        const div = document.createElement('div');
        div.className = 'row align-items-center'
        div.id = 'row' + this.rows;
        this.table_contents.push(div);
        this.rows++;
    }

   this.add_row_cell = function (index) {
        const target_row = 'row' + index;

        //create product container
        const row_child = document.createElement('div');
        const product_grid = document.createElement('div');
        const product_img = document.createElement('div');
        const img = document.createElement('img');
        img.className = 'pic-1';
        img.src = "/data/product/imgs/pic1.jpg";

        row_child.id = product.name;
        row_child.className = 'col-md-3 col-sm-6';
        product_grid.className = 'product-grid';
        product_img.className = 'product-img';

        row_child.innerHTML = product_grid;
        product_grid.innerHTML = product_img;
        document.getElementById(target_row).innerHTML = row_child ;
        this.contents_num++;
     }
}

function generate_content(){
    var content_table = new table();
    content_table.add_row();
}