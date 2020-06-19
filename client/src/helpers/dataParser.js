const dataParser = (transactions, category) => {

  let categoryData = {};

  for (let key in transactions) {
    if (transactions[key]['Transaction Type'] === 'debit') {
      if (!categoryData[transactions[key].Category]) {
        categoryData[transactions[key].Category] = Number(transactions[key].Amount);
      } else {
        categoryData[transactions[key].Category] += Number(transactions[key].Amount);
      }
    }
  }

  if (category) {
    return categoryData[category];
  }

  let sortedData = Object.entries(categoryData).sort((a, b) => b[1] - a[1]);
  return sortedData.slice(0, 10);
}

export default dataParser;