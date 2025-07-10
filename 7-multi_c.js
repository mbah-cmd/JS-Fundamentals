const num = parseInt(process.argv[2]);

if (isNaN(num) || num <= 0) {
  console.log("Missing number of occurrences");
} else {
  console.log(Array(num).fill("C is fun").join("\n"));
}
