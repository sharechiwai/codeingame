function addCommaToNumberViaFunction(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function addCommaToNumberViaDefaultFunction(number) {
  return number.toLocaleString();
}
console.log(addCommaToNumberViaDefaultFunction(1000));