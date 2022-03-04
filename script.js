function sumTransactions(transactions) {
    let total = 0;

    for(transaction of transactions) {
        total += transaction;
    }

    return total;
}

function calculateBalance(family) {
    const totalIncomes = sumTransactions(family.income);
    const totalExpenses = sumTransactions(family.expense);
    const totalBalance = totalIncomes - totalExpenses;
    
    let isPositive = totalBalance >= 0;
    let balanceText = "Negative";

    if(isPositive) {
        balanceText = "Positive"
    }

    console.log(`${balanceText} balance: R$ ${totalBalance.toFixed(2)}`)
}