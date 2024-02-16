export function addCommasToNumber(amount) {
  amount = amount.toString()
  if (amount.length > 3) {
    amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return amount
}
