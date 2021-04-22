

function Cell(){
    this.listItem;
    this.priceSpan;
    this.nameText;
    this.price;
    this.name;
    this.imgDiv;

    
    this.cell = (row) =>{
        this.listItem = document.createElement('li');
        this.nameText = document.createElement('h3');   
        this.imgDiv   = document.createElement('div');
        this.imgSrc   = document.createElement('img');
        this.priceSpan = document.createElement('span');
        this.listItem.id = 'listItem' + row;
        this.priceSpan.id = 'priceSpan' + row;
        this.imgDiv.id = 'imgDiv' + row;
        this.nameText.id = 'nameText' + row;
        this.imgDiv.className = 'cart-item';
        this.imgSrc.className = 'cart-img';
        this.nameText.className ='cart-itemName';
        this.listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        this.priceSpan.className = 'badge bg-primary rounded-pill';
        //this.listItem.appendChild(this.priceSpan);
    }

    this.setCell = (name,price,imgURL) => {
        this.nameText.innerText = name;
        this.price = price;
        this.priceSpan.innerHTML = '$'+price;

        this.imgSrc.src = (imgURL != null) ? new URL(imgURL): "";
        
    }


    this.setPrice = (price) => {
        this.price = price;
        this.priceSpan.innerHTML = '$'+this.price;
    }

    this.setName = (itemName) => {
        this.name = itemName;
        this.listItem.innerHTML = this.name;
    }
}

function table(){
    this.unorderedList;
    this.table_contents;
    this.rows;
    //this.total;


    this.construct = function(){
        this.unorderedList = document.createElement('ul');
        this.unorderedList.className = 'list-group';
        this.unorderedList.id = 'listHead';
        document.getElementById('cart_table').appendChild(this.unorderedList);
    

        this.total = 0;
        this.rows = 0;
        this.table_contents = [];
    }

    this.add_cell = function (cartItem) {
        let tableCell = new Cell();
        tableCell.cell(this.rows);
        tableCell.setCell(cartItem.product.name, cartItem.product.price, cartItem.product.img_url);
        tableCell.imgDiv.appendChild(tableCell.imgSrc);
        tableCell.listItem.appendChild(tableCell.imgDiv);
        tableCell.listItem.appendChild(tableCell.nameText);
        tableCell.listItem.appendChild(tableCell.priceSpan);
        this.unorderedList.appendChild(tableCell.listItem);
        this.table_contents[this.rows] = tableCell;
        this.rows++;
        //this.total += 5.00;
        console.log(this.table_contents.length);
    }

    this.totalCell = (isActive,totalPrice) => {
        if (!isActive){
            return;
        }
        const priceTotalCell = new Cell();
        priceTotalCell.cell(this.rows);
        priceTotalCell.setCell('Total Price: ', totalPrice);
        priceTotalCell.listItem.appendChild(priceTotalCell.nameText);
        priceTotalCell.listItem.appendChild(priceTotalCell.priceSpan);
        this.unorderedList.appendChild(priceTotalCell.listItem);
        this.rows++;
    }

    this.updateCell = (index) => {
        this.table_contents[index].setPrice(this.total);
    }

    //todo:
    //removing a cell doesn not update the total price correctly
    this.removeCell = (row) => {
        const targetCellId = this.table_contents[row].listItem.id;
        document.getElementById(targetCellId).remove(); 
        this.total -= this.table_contents[row].price;
        this.updateCell(row);
        delete this.table_contents[row];
        this.rows--;

    }
}



function generate_cart(){
    console.log('runnn')
    let itemsTable = new table();
    itemsTable.construct();

    
    for (let index = 0; index < localSessionCart.cartItemCount; index++) {
        if (localSessionCart.cartObj[index] != null){
            itemsTable.add_cell(localSessionCart.cartObj[index]);
        }
    }   

    itemsTable.totalCell(true, localSessionCart.cartTotal);
    

    console.log(JSON.parse(sessionStorage.getItem("guest_cart")));
}