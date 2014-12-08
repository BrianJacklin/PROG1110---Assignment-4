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

         if(isNaN(cost.value)){
            cost.value = '0.00';
         }
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
         tax.value = (amount * taxRate).toFixed(2); // set tax rate above in global variables
      }
   }

// TO DO
   function validateForm(){

      if(shipChoice.value <= 0){
         shippingOption.classList.add("error");
      }else{
         shippingOption.classList.remove("error");
      }
      var orderQty = [$("qty1"),$("qty2"),$("qty3")];

      orderQty.forEach(function(entry){
         if(entry.value === "0"){
            entry.classList.add("error");
         }else{
           entry.classList.remove("error");
         }

         if(isNaN(entry.value)){
            console.log("Please enter a number.");
            entry.classList.add("error");
            entry.value = "0";
         }else{
           entry.classList.remove("error");
         }
      });

      if (document.getElementsByClassName("error").length === 0){
         document.orders.submit();
      }else{
         console.log("nope nope nope nope nope nope");
      }
      
   }

   $("submitForm").addEventListener("click",validateForm, false);

// TO DO
   function resetForm(){
      document.orders.reset();
      todayTxt();
   }

  $("resetForm").addEventListener("click",resetForm, false);

   orders.onchange = function(){
      productCosts();
      calcCost();
      shipExpense();
      calcTotal();
   };

   function initForm(){
      //Display Date
      todayTxt();
   }
   //initialize the form after everything has loaded.
   initForm();
};