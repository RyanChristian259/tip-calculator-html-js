//target calculate button and retrieve user input from bill amount entry field
document.getElementById("button").addEventListener("click", function (){
   var billAmt = document.getElementsByClassName('userBillAmt')[0].value;
   billAmt = parseInt(billAmt);

   //get input from tip percentage entry field
   var tipPercentage = document.getElementsByClassName('userTipPercentage')[0].value;
   //convert tip percentage from string to usable number
   tipPercentage = parseInt(tipPercentage);

   //append amount the user should tip to the DOM/page
   document.getElementById('tipHere').innerHTML = 'You Should Tip $ ' + calculate(billAmt, tipPercentage).toFixed(2);

   //function to convert user bill amount and desired tip percentage to the amount they should tip
   function calculate(billAmt, tipPercentage){
     var tipAmt = (tipPercentage / 100) * billAmt;
     return tipAmt;
    }
});
