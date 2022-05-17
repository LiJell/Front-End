// 요즘은 prompt 잘 안씀
// parseInt is a converter: string to number
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)){
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age")
}