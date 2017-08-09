var cash = {
    denom : [],
    bills: [0, 0, 0],
    addBills: function(bills) { //add bills to the ATM
        this.bills = bills;
    },
    canDispense: function(sum) { //if ATM have enough to dispense the sum
        for (var i = this.denom.length - 1; i  >= 0; i--) {

            sum -= Math.min(sum/this.denom[i], this.bills[i]) * this.denom[i];
        }
        return sum == 0;
    },
    dispense: function(sum) { // check if can dispense, if so call putout
        if(!this.canDispense(sum)){
            alert("theres is NOT enough money in the ATM");
            return;
        }
        var give = [];

        for (var i = this.denom.length - 1; i  >= 0; i--) {
            let number_of_bills = Math.floor(Math.min(sum/this.denom[i], this.bills[i]));
            for (let index = 0 ; index < number_of_bills; index++){
               give.push(this.denom[i]);
               sum -= this.denom[i];
               this.bills[i]--;
            }
        }
        
        this.putout(give);
        this.cashBalance(give);
    },
    putout: function(give) { //dispense the bills out 
      alert ("here are your notes ..." + give );  
    },
    cashBalance: function() { //how much money left in ATM
        
    }
}

cash.denom = [50, 100, 200];
cash.addBills([4, 1, 3]);
console.log(cash.dispense(window.prompt("enter amount to be withdrawn", 200)));








