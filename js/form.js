/*
   Author:
   Date:

   Filename: form.js

   Functions List:

   todayTxt()
      Returns the current date in the format mm-dd-yyyy

   initForm()
      Sets up and initializes the Web form.

   productCosts()
      Returns the total product costs

   shipExpense()
      Stores the value of the selected shipping option

   calcTotal()
      Calculates the total cost of the order

   calcShipping()
      Calculates the total cost of shipping and updates the
      total cost of the order

   calcCost()
      Calculates the cost of each order and updates the total
      cost

   validateForm()
      Validates the form prior to submission

   resetForm()
      Resets the Web form and Web page
*/
window.onload = function(){
   //Globals 
   var $              = function(id){return document.getElementById(id);},
       orders         = $("orders"),
       shippingOption = $("shipping"),
       shipChoice     = $("shipcost"),
       today          = new Date(),
       display        = $("date"),
       taxRate        = 0.05,
       total          = $("total");

   function todayTxt() {
      display.value = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
   }

   function productCosts(){
      for(var i = 1;i <= 3;i++){
       var qty = $("qty"+i).value,
       price = $("price"+i).value,
       cost = $("cost"+i);

       cost.value = (qty * price).toFixed(2);
      }
   }

   function shipExpense(){
         if (shippingOption.value === '4.95'){
            shipChoice.value = 4.95;
         }else if(shippingOption.value === '8.95'){
            shipChoice.value = 8.95;
         }else if(shippingOption.value === '12.95'){
            shipChoice.value = 12.95;
         }else{
            // default behaviour
            shipChoice.value = '0.00';
         }
   }

   function calcTotal(){
      for(var i = 1,j = 0,amount = 0;i <= 3;i++){
         var tax = $("tax");
         var cost = [$("cost"+i).value];

         amount += parseFloat(cost[j]);
         total.value = (parseFloat(amount.toFixed(2)) + parseFloat(tax.value) + parseFloat(shipChoice.value)).toFixed(2);
      } 
   }

// TO DO
   function calcShipping(){
        
   }

   function calcCost(){
      for(var i = 1,j = 0,amount = 0;i <= 3;i++){
         var tax = $("tax");
         var cost = [$("cost"+i).value];

         amount += parseFloat(cost[j]);
         tax.value = (amount * taxRate).toFixed(2);
      }
   }

// TO DO
   function validateForm(){
      console.log("validated");
   }

   $("submit").onclick = function(){
      validateForm();
   }

// TO DO
   function resetForm(){
      console.log('reset');
   }

   $("reset").onclick = function(){
      resetForm();
   }

   orders.onchange = function(){
      productCosts();
      calcCost();
      shipExpense();
      calcTotal();
            todayTxt();

   }

   function initForm(){
      //Display Date
      todayTxt();
   }
   //initialize the form after everything has loaded.
   initForm();
}