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

function todayTxt() {
   var today = new Date();
   return today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
}
