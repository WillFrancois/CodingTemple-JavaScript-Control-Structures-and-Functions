// Task 1
function depositFunds(depositedFunds, account) {
  account.funds += depositedFunds;
}

function checkFunds(account) {
  return account.funds;
}

function withdrawFunds(amountToWithdraw, account) {
  if (checkFunds(account) >= amountToWithdraw) {
    account.funds -= amountToWithdraw;
  }
}
