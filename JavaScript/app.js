const player = {
  name: "LiJell",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["points"]);


player.fat = false;
player.lastName = "potato";
console.log(player);

