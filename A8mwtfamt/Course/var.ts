var pet = `🐕`;

function setPet() {
    var pet = `🐈`;
    console.log(`Pet in the house: ${pet}`);
}

setPet();
console.log(`Pet in the house: ${pet}`);

var index = 0;
for (var index = 0; index < 5; index++) {
    console.log(`Index inside the for loop: ${index}`);
}
console.log(`Index outside the for loop: ${index}`);