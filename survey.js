const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? Nicknames are also acceptable 😃 ', (answer1) => {
    rl.question('whats an activity you like doing? ', (answer2) => {
        rl.question('What do you listen to while doing that? ', (answer3) => {
            rl.question('What meal is your favourite? ', (answer4) => {
                rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
                    rl.question('Which sport is your absolute favourite? ', (answer6) => {
                        rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
  console.log(`Thank you for your valuable feedback: ${answer1} likes doing ${answer2} listening to ${answer3} . His/Her favorite meal i.e (${answer4}) for that meal his /her favourite thing to eat is ${answer5}. His/her favorite sport is ${answer6}.His/her superpower is ${answer7}`);
  rl.close();
});
});
});
});
});
});
});
