/**
 * <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
 */

function Cart(){
    this.items;
    this.iterator = 0;

    this.construct = () => {
        this.items = {};

    }

    this.addItem = (item,qty) => {
        this.items[item] = qty; 
    }

    this.removeItem = (item, qty) => {
        if (this.items[item] - qty <= 0){
            delete this.items[item];
        } else{
            this.items[item] -= qty;
        }
    }

}

function Cell(){
    this.listItem;
    this.priceSpan;
    this.price;
    this.name;
    
    this.cell = (row) =>{
        this.listItem = document.createElement('li');
        this.priceSpan = document.createElement('span');
        this.listItem.id = 'listItem' + row;
        this.listItem.id = 'priceSpan' + row;
        this.listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        this.priceSpan.className = 'badge bg-primary rounded-pill';
        //this.listItem.appendChild(this.priceSpan);
    }

    this.setCell = (name,price) => {
        this.listItem.innerHTML = name;
        this.price = price;
        this.priceSpan.innerHTML = '$'+price;
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
    this.total;


    this.construct = function(){
        this.unorderedList = document.createElement('ul');
        this.unorderedList.className = 'list-group';
        this.unorderedList.id = 'listHead';
        document.getElementById('cart_table').appendChild(this.unorderedList);
    

        this.total = 0;
        this.rows = 0;
        this.table_contents = [];
    }

    this.add_cell = function () {
        let tableCell = new Cell();
        tableCell.cell(this.rows);
        tableCell.setCell('Item'+this.rows,5.00);
        tableCell.listItem.appendChild(tableCell.priceSpan);
        this.unorderedList.appendChild(tableCell.listItem);
        this.table_contents[this.rows] = tableCell;
        this.rows++;
        this.total += 5.00;
        console.log(this.table_contents.length);
    }

    this.totalCell = (isActive) => {
        const priceTotalCell = new Cell();
        priceTotalCell.cell(this.rows);
        priceTotalCell.setCell('Total Price: ', this.total);
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
    for (let index = 0; index < 5; index++) {
      itemsTable.add_cell();
    }   

    itemsTable.totalCell(true);
    itemsTable.removeCell(2); 

    console.log(sessionStorage);
}