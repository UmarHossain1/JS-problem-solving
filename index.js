function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || expenses > income) {
    return "Invalid Input";
  }

  const difference = income - expenses;

  const tax = difference * 0.2;

  return tax;
}
