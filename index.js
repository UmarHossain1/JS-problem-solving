// *problem 1

function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || expenses > income) {
    return "Invalid Input";
  }

  const difference = income - expenses;

  const tax = difference * 0.2;

  return tax;
}

// *problem 2

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  const check = email.split("@");

  const userName = check[0];

  const domainName = check[1];

  return userName + " sent you an email from " + domainName;
}
