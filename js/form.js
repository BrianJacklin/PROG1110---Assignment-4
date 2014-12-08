window.onload = function(){
   //Globals 
   var $              = function(id){return document.getElementById(id);}, // grab ID's with less effort
       orders         = $("orders"),
       shippingOption = $("shipping"),
       shipChoice     = $("shipcost"),
       today          = new Date(),
       display        = $("date"),
       taxRate        = 0.05,
       total          = $("total"),
       counter        = false;

   function todayTxt() {
      display.value = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
   }

   function productCosts(){
      for(var i = 1;i <= 3;i++){
         var qty = $("qty"+i).value,
         price = $("price"+i).value,
         cost = $("cost"+i);

         cost.value = (qty * price).toFixed(2);

         if(isNaN(qty) || qty <= 0){
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

   function calcCost(){
      for(var i = 1,j = 0,amount = 0;i <= 3;i++){
         var tax = $("tax");
         var cost = [$("cost"+i).value];

         amount += parseFloat(cost[j]);
         tax.value = (amount * taxRate).toFixed(2);
      }
   }

   function validateForm(){
      var orderQty = [$("qty1"),$("qty2"),$("qty3")];

      // Check shipping
      if(shipChoice.value <= 0){
         shippingOption.classList.add("error");
         alert("Please select a shipping option.");
      }else{
         shippingOption.classList.remove("error");
         counter = true;
      }

      // check if field NaN or 0 add/remove error style as required
      orderQty.forEach(function(qty){
         if(qty.value <= 0 || qty.value <= "0" ){
            qty.classList.add("error");
            qty.value = 0;
         }else if(isNaN(qty.value)){
            alert("Enter a valid number in at least one quantity field.");
            qty.classList.add("error");
            qty.value = 0;
         }else{
           qty.classList.remove("error");
           counter = true;
         }
      });

      // check if at least 1 field is filled out
      if($("qty1").value === "0" && $("qty2").value === "0" && $("qty3").value === "0"){
         alert("Enter at least one valid quantity.");
      }else{
         $("qty1").classList.remove("error");
         $("qty2").classList.remove("error");
         $("qty3").classList.remove("error");
      }
        
   }
   function submitForm(){
      validateForm();
      if (document.getElementsByClassName("error").length === 0 && counter === true){
         document.orders.submit();
      }
   }

   $("submitForm").addEventListener("click",submitForm, false);

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
      validateForm();
   };

   function initForm(){
      todayTxt();
   }

   initForm();
};