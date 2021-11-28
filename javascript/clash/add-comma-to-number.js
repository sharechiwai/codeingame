const AddCommaToNumber = {
  addCommaToNumberViaFunction: number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  addCommaToNumberViaDefaultFunction: number => {
    return number.toLocaleString();
  }
};

export default AddCommaToNumber;
