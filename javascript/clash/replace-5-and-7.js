// function to replace 5 and multiple of 5 with Foo and 7 or multiple of 7 with Bar
// if the number is not multiple of 5 or 7, return the number
// if the number is multiple of 5 and 7, return FooBar
function replace5and7(number) {
  if (number % 5 === 0 && number % 7 === 0) {
    return "FooBar";
  } else if (number % 5 === 0) {
    return "Foo";
  } else if (number % 7 === 0) {
    return "Bar";
  } else {
    return number;
  }
}

for(var i = 1; i <= 100; i++) {
  console.log(replace5and7(i));
}