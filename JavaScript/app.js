// 요즘은 prompt 잘 안씀
// parseInt is a converter: string to number
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a positive number");
} else if (age < 18) {
  console.log("you are too young to drink");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else {
  console.log("better to exercise");
}
