function fizzbuzz(count) {
  for (let x = 1; x < count + 1; x++) {
    if (x % 3 == 0 && x % 4 == 0) {
      console.log("fizzbuzz");
    } else if (x % 3 == 0) {
      console.log("fizz");
    } else if (x % 4 == 0) {
      console.log("buzz");
    } else {
      console.log(x);
    }
  }
}

fizzbuzz(13);
