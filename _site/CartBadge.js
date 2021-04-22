var badge;

$(window).ready (function () { 
    console.log("ready")
    badge = new CartBadge();
    badge.construct();
});

function CartBadge(){
    this.items;
    this.badgeSpan;

    this.construct = () => {
        
        this.badgeSpan = document.createElement('span');
        this.badgeSpan.className = 'badge badge-pill badge-primary';
        this.badgeSpan.style ='float:right;margin-bottom:-10px;';
        this.badgeSpan.id = "cartBadge";
        document.getElementById('cartButton').appendChild(this.badgeSpan);
        this.items = localSessionCart.cartItemCount;
        this.updateBadge();
    }

    this.updateBadge = () => {
        this.items = localSessionCart.cartItemCount;
        if(this.items > 0){
            this.badgeSpan.innerHTML = this.items;
        }
    }

    this.increaseItems = (nums) => {
        this.items += nums;
        this.updateBadge();
    }

    this.decreaseItems = (nums) => {
        this.items -= nums;
        this.updateBadge();
    }
}