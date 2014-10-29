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

   var form = document.getElementById("orders"),
   shippingOption = document.getElementById("shipping"),
   shipChoice = document.getElementById("shipcost"),
   today = new Date(),
   display = document.getElementById("date"),
   total = document.getElementById("total");

   function todayTxt() {
      display.value = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
   }

   function productCosts(){
         for(var i = 1;i <= 3;i++){
          var qty = document.getElementById("qty"+[i]).value,
          price = document.getElementById("price"+[i]).value,
          cost = document.getElementById("cost"+[i]);
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
    
   }

   function calcShipping(){
      
   }

   function calcCost(){
      for(var i = 1;i <= 3;i++){
         var tax = document.getElementById("tax");
         var cost = document.getElementById("cost"+[i]);
         cost += parseInt(cost.value);
         tax.value = (cost * 0.05).toFixed(2);
      }
   }

   function validateForm(){

   }

   function resetForm(){
      
      todayTxt();
      form.reset();
   }

   function initForm(){
      //Display Date
      todayTxt();
   }

   form.onchange = function(){
      productCosts();
      calcCost();
      shipExpense();
   }

   //initialize the form after everything has loaded.
   initForm();
}