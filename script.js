function tax() {
  let salary = parseInt(window.prompt("Enter your package"));

  if (salary >= 0 && salary < 350000) {
    window.alert("You dont have to pay tax on " + salary);
    }
   
    else if (salary >= 350000 && salary < 800000) {
    let payabletax = (salary / 100) * 10;
    window.alert("tax is " + payabletax + " on your package of " + salary);
    }
    
    else if (salary >= 800000) {
    let payabletax = (salary / 100) * 17;
    window.alert("tax is " + payabletax + " on your package of " + salary);
     }
     
    else {
    window.alert("Invalid Choice");
  }
}

// tax();

// == will compare two expression but will not compare their type.
// === will compare two expression and their types.
// javascript is client side server side scripting event driven..
