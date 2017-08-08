'use strict'

var purchase = {
    amount_available: 0,
    setAmountAvailable: function(amount){
        if (!isNaN(parseFloat(amount)) ){
            this.amount_available = amount;
        }
        else{
            this.amount_available = 4300;
            alert("you did not enter a valid amount - you have thus received the default amount of 4,300 nis ");
        }
    }, 
    vat: 0.17,
    cell_price_before_vat: 849,
    cellphone:    function Phone(price) {
            this.final_price = price;
    },
    accessory_price_before_vat: 39,
    accessory:    function Accessory (price) {
            this.final_price =  price; 
    },
    cellphones : [],
    accessories : [],

    calc_price_with_vat: function(price_before_vat){
        return  price_before_vat + (price_before_vat * this.vat);
    }, 

    begin: function() { 

        this.setAmountAvailable(window.prompt("enter amount available for purchase", 4300));
        let cell_price_with_vat = this.calc_price_with_vat(this.cell_price_before_vat)
        while(this.amount_available >= cell_price_with_vat){
            this.cellphones.push(new this.cellphone(cell_price_with_vat));
            this.amount_available -= cell_price_with_vat;
        }
        console.log("amount left: " + this.amount_available + "  number of phones: " + this.cellphones.length);

        let accessory_price_with_vat = this.calc_price_with_vat(this.accessory_price_before_vat)
        while(this.amount_available >= accessory_price_with_vat){
            this.accessories.push(new this.accessory(accessory_price_with_vat));
            this.amount_available -= accessory_price_with_vat;
        }

        console.log("amount left: " + this.amount_available + "  number of accessories: " + this.accessories.length);

    },
}

purchase.begin();









