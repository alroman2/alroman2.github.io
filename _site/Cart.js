

var localSessionCart = null;

$(window).ready (function () { 
    console.log("ready")
    localSessionCart = new Cart();
    localSessionCart.construct();    
    //console.log(localSessionCart.cartItemCount)
});


function Cart(){
    this.cartObj;
    this.cartCI;
    this.cartItemCount;
    this.cartTotal; 


    this.construct = () => {
        this.cartObj = new Array();
        this.cartCI = 0;
        this.cartItemCount = 0;
        this.cartTotal = 0;

        if (sessionStorage.getItem("guest_cart") != null){
            this.cartCI   = parseInt(sessionStorage.getItem("guest_cart_ci"));            
            this.cartObj  = JSON.parse(sessionStorage.getItem("guest_cart"));
            this.cartItemCount = parseInt(sessionStorage.getItem("guest_cart_item_count"));
            this.cartTotal = parseFloat(sessionStorage.getItem("guest_cart_total"));
            console.log(this.cartObj);
        } else {
            sessionStorage.setItem("guest_cart",this.cartObj);
            sessionStorage.setItem("guest_cart_ci",-1);
            sessionStorage.setItem("guest_cart_item_count",0);
            sessionStorage.setItem("guest_cart_total", 0.00);
        }
    }

    this.calcItemTotal= (item, qty) => {
        let itemTotal = item.price * qty;
        this.cartTotal += itemTotal;
    }

    this.addItem = (item,qty) => {
        this.cartItemCount += qty;
        this.calcItemTotal(item,qty);

        var newItem = new Object();
        newItem["product"] = item;
        newItem["itemQty"] = qty;

        this.cartObj[this.cartCI++] = newItem;

        sessionStorage.setItem("guest_cart",JSON.stringify(this.cartObj));
        sessionStorage.setItem("guest_cart_ci", this.cartCI);
        sessionStorage.setItem("guest_cart_item_count", this.cartItemCount);
        sessionStorage.setItem("guest_cart_total", this.cartTotal);
    }

    this.removeItem = (rowID, qty) => {
        if (this.cartObj[rowID]["itemQty"] - qty <= 0){
            this.cartObj[rowID] = null;
            this.cartItemCount -= this.cartObj[rowID]["itemQty"];
            this.cartTotal -= this.cartObj[rowID]["itemQty"] * this.cartObj[rowID]["product"].price;
        } else {
            this.cartObj[rowID]["itemQty"] -= qty;
            this.cartTotal -= this.cartObj[rowID]["product"].price *qty;
        }

        sessionStorage.setItem("guest_cart", JSON.stringify(this.cartObj));
        sessionStorage.setItem("guest_cart_item_count", this.cartItemCount);
        sessionStorage.setItem("guest_cart_total", this.cartTotal);
    }

}
